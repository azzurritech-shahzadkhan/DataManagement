import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
import 'regenerator-runtime/runtime'
import { Mic } from 'lucide-react'

const VoiceCapture = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>
  }

  return (
    <div className='bg-blue-600 p-4 rounded flex justify-center flex-col items-center mt-5'>
      <h2 className='font-bold text-white text-xl text-center mb-2'>
        Speech to Text
      </h2>

      <div className='flex items-center justify-center p-2 rounded-full bg-white cursor-pointer'>
        <Mic className=' text-black  rounded-full shrink-0' />
      </div>

      <p className='text-white'>Microphone: {listening ? 'on' : 'off'}</p>
      <div className='flex gap-12 mt-2'>
        <button
          onClick={SpeechRecognition.startListening}
          className='bg-green-500 px-4 text-white font-bold  rounded'
        >
          Start
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          className='bg-red-500 px-4 text-white font-bold  rounded'
        >
          Stop
        </button>
      </div>
      <button
        onClick={resetTranscript}
        className='bg-yellow-300 px-4 mt-3 text-white font-bold  rounded'
      >
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  )
}
export default VoiceCapture
