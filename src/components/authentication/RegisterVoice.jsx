import { useState, useRef } from "react";
import "regenerator-runtime/runtime";
import { Mic } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const VoiceCapture = ({ signInMethod, setSignInMethod }) => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const navigate=useNavigate()

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
        audioChunksRef.current = []; // Clear previous chunks
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

  // Send audio file to backend
 const handleSignUp = async (e) => {
  e.preventDefault();

  if (!audioBlob) {
    setResponseMessage("No audio recorded. Please record and try again.");
    return;
  }

  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav"); 

  try {
    const response = await fetch("https://x7zb2lx4-8007.inc1.devtunnels.ms/ai-agent/signup", {
      method: "POST",
      body: formData, // Sending FormData
    });

    if (response.ok) {
      const data = await response.json();
      const message = data.message || "Signup successful!";
      setResponseMessage(message);

      // Convert text to speech
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(message);
      synth.speak(utterance);
       navigate('/')
    } else {
      setResponseMessage("Signup failed. Please try again.");
    }
  } catch (error) {
    setResponseMessage("Error occurred. Try again later.");
  }
};


  return (
    <>
      <form onSubmit={handleSignUp} className="w-full flex justify-center">
        <h6 className="text-[13px] mt-5 hover:text-blue-500 border-blue-500 hover:border-b leading-[23.4px] font-bold text-white cursor-pointer hover:font-extrabold hover:text-md transition fixed border-b  top-10 right-10" onClick={() => setSignInMethod(!signInMethod)}>
                Register via text
              </h6>
        <div className="w-full lg:max-w-[452px] md:max-w-[400px] max-w-[300px] mt-[10px] xl:px-[30px] px-[20px] xl:py-[10px] py-[5px] border rounded-[30px] justify-center">
          <div className="flex flex-col w-full">
            <div className="xl:mt-[10px] mt-[5px] w-full">
              <button className="flex items-center justify-center bg-blue-500 text-white text-[10px] font-bold w-full xl:h-[44.96px] h-[30px] rounded-[12px] p-2 mt-3" type="submit">
                SIGN UP
              </button>
            </div>
            
        
          </div>

          {/* Voice Capture Section */}
          <div className="bg-blue-600 p-4 rounded flex justify-center flex-col items-center mt-5">
            <h2 className="font-bold text-white text-xl text-center mb-2">Voice Recording</h2>

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
                <div className="xl:mt-[22.61px] mt-[15px]">
              <p className="text-[12px] font-bold leading-[19.6px] text-gray-400">
                Already have an account?
                <Link to="/" className="text-white underline hover:text-blue-400">
                  Sign In
                </Link>
              </p>
            </div>

            {audioBlob && (
              <>
                <audio controls className="mt-3">
                  <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-white mt-2">Audio recorded and ready to send.</p>
              </>
            )}
          </div>

          {/* Display response message */}
          {responseMessage && (
            <div className="mt-4 text-center text-white bg-green-500 p-2 rounded">
              {responseMessage}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default VoiceCapture;
