import { useRef, useState } from "react";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router";
import login, { setCookie } from "@/lib/login";

const VoiceLogin = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const navigate=useNavigate();

  // Start recording audio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        setAudioBlob(audioBlob);
        audioChunksRef.current = []; // Clear recorded data
      };

      audioChunksRef.current = [];
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setResponseMessage("Error accessing microphone.");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  // Send recorded audio to backend for sign-in
const handleSignIn = async () => {
  if (!audioBlob) {
    const message = "No audio recorded. Please record and try again.";
    setResponseMessage(message);
    speakMessage(message); // Speak the error message
    return;
  }

  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav"); // Append audio file

  try {
    const response = await fetch("https://x7zb2lx4-8007.inc1.devtunnels.ms/ai-agent/signin", {
      method: "POST",
      body: formData,
    });

    console.log("Response of voice sign-in is coming here", response);

    if (!response.ok) {
      throw new Error("Sign-in failed. Please try again.");
    }

    const data = await response.json();
    console.log("Parsed response data:", data); // Debugging

    // Extract tokens correctly from signin_response
    const {
      access_token,
      refresh_token,
      access_token_expires_at,
      refresh_token_expires_at
    } = data.signin_response;

    if (!access_token || !refresh_token) {
      throw new Error("Invalid login response. Missing tokens.");
    }

    // Convert expiration times
    const accessExp = new Date(access_token_expires_at).getTime();
    const refreshExp = new Date(refresh_token_expires_at).getTime();

    // Store tokens like text authentication
    sessionStorage.setItem("accessToken", access_token);
    sessionStorage.setItem("accessExp", accessExp.toString());
    setCookie("refreshToken", refresh_token, refreshExp);
    setCookie("refreshExp", refreshExp);

    // Set authorization header
    login.defaults.headers.Authorization = `Bearer ${access_token}`;

    // Convert response message to speech
    const successMessage = data.message || "Sign-in successful!";
    speakMessage(successMessage); // Speak success message

    // Navigate after a short delay to ensure the speech plays
    setTimeout(() => {
      navigate("/bussiness-categories");
    }, 2000);
  } catch (error) {
    console.error("Error during sign-in:", error);
    const errorMessage = error.message || "Sign-in failed. Please try again.";
    setResponseMessage(errorMessage);
    speakMessage(errorMessage); // Speak the error message
  }
};

// Function to speak a given message
const speakMessage = (message) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message);
  synth.speak(utterance);
};





  return (
    <div className="bg-blue-600 p-4 rounded flex justify-center flex-col items-center mt-5">
      <h2 className="font-bold text-white text-xl text-center mb-2">Voice Login</h2>

      <div className="flex items-center justify-center p-2 rounded-full bg-white cursor-pointer">
        <Mic className="text-black rounded-full shrink-0" />
      </div>

      <p className="text-white">Microphone: {recording ? "Recording..." : "Idle"}</p>
      <div className="flex gap-12 mt-2">
        <button onClick={startRecording} className="bg-green-500 px-4 text-white font-bold rounded" disabled={recording}>
          Start
        </button>
        <button onClick={stopRecording} className="bg-red-500 px-4 text-white font-bold rounded" disabled={!recording}>
          Stop
        </button>
      </div>

      {audioBlob && (
        <>
          <audio controls className="mt-3">
            <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-white mt-2">Audio recorded and ready to send.</p>
          <button onClick={handleSignIn} className="bg-blue-500 text-white font-bold px-4 py-2 rounded mt-2">
            Sign In with Voice
          </button>
        </>
      )}

      {/* Display response message */}
      {responseMessage && <div className="mt-4 text-center text-white bg-green-500 p-2 rounded">{responseMessage}</div>}
    </div>
  );
};

export default VoiceLogin;
