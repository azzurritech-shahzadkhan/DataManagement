import { useState } from 'react'
// import  {Breadcrumbs}  from "@/components/BreadCrumbs";
import Heading from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { useChat } from 'ai/react'
// import AimodelOverview from "./AiModelOverview";
import { Message as PreviewMessage } from '@/components/Messages'

import ModelInput from '@/components/ModalInput'

// import ChatSideBar from "@/components/ChatSideBar"
import PageContainer from '@/components/AiAssist/PageContainer'
// import MultiModel from '@/components/Multimodel'
import ChatNavbar from '@/components/ChatNavbar'
const AiAgent = () => {
  const [conversation, setConversation] = useState([])
  const { messages, input, setInput, isLoading, stop } = useChat()
  const [isSending, setIsSending] = useState(false)
  const [botMessage, setBotMessage] = useState('')
  const [success, setSuccess] = useState(null)
  const [isChat, setChat] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState('')
  const [file, setFile] = useState(null)
    const [isUploading, setIsUploading] = useState(false) 

 
  const handleFileChange = e => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile)
      setError('')
    } else {
      setError('Please select a valid CSV file.')
      setFile(null)
    }
  }

  // Handle drag events
  const handleDrag = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  // Handle drop event
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === 'text/csv') {
      setFile(droppedFile)
      setError('')
    } else {
      setError('Please drop a valid CSV file.')
      setFile(null)
    }
  }

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    setError('') 
   

    if (!file) {
      setError('No file selected.')
      return
    }
 setIsUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('index_name', 'c4')

    try {
      const response = await fetch(
        'https://x7zb2lx4-8005.inc1.devtunnels.ms/upload_csv',
        {
          method: 'POST',
          body: formData
        }
      )

      if (response.ok) {
        // Handle successful upload
        const result = await response.json() 
        console.log('File uploaded successfully:', result)
        setSuccess('File uploaded successfully.')
         setIsUploading(false)
        // setChat("Now you can continue chat");
      } else {
        // Handle HTTP errors
        const errorText = await response.text() 
        console.error('Upload failed:', errorText)
        setError(`Upload failed: ${errorText}`)
      }
    } catch (err) {
      
      console.error('Error uploading file:', err)
      setError('An error occurred during file upload.')
    }
  }

  const handleSendQuery = async () => {
    if (!input.trim()) return

    setIsSending(true)
    setBotMessage('') // Reset bot message

    // Store user message in conversation
    const userMessage = {
      id: Date.now() + '-user',
      role: 'user',
      content: input
    }
    setConversation(prev => [...prev, userMessage])

    const formData = new FormData()
    formData.append('query', input)
    formData.append('index_name', 'c4')
    formData.append('user_id', 'bc123456')

    try {
      const response = await fetch(
        'https://x7zb2lx4-8005.inc1.devtunnels.ms/ask',
        {
          method: 'POST',
          body: formData
        }
      )

      console.log('Response Status:', response.status)

      if (!response.ok) {
        const errorResponse = await response.text()
        console.error('Error Response Text:', errorResponse)
        throw new Error(
          `Failed to fetch AI response. Status: ${response.status}, Response: ${errorResponse}`
        )
      }

      const data = await response.json()
      console.log('Full API Response:', data)

      if (data && data.answer) {
        // ✅ Correct key is `answer`
        const botMessage = {
          id: Date.now() + '-assistant',
          role: 'assistant',
          content: data.answer
        }

        setConversation(prev => [...prev, botMessage])
      } else {
        console.error('Unexpected API response structure:', data)
      }

      setInput('')
    } catch (error) {
      console.error('Error fetching AI response:', error)
    }
  }

  return (
    <>
      <PageContainer scrollable={true}>
        <div className='space-y-4  flex flex-col items-center justify-center w-full'>
          {/* <Breadcrumbs items={breadcrumbItems} />  */}

          <div className='flex items-start justify-between text-white w-full'>
            <Heading
              title='AI Agent'
              description='Chat with our AI assistant below.'
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center justify-center w-full'
          >
            <div
              className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer ${
                dragActive ? 'bg-blue-900' : 'bg-blue-700'
              }`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('fileInput').click()}
            >
              <svg
                className='w-10 h-10 mb-3 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
              <p className='text-sm text-gray-200 text-center'>
                {file
                  ? `Selected file: ${file.name}`
                  : 'Drag and drop your CSV file here or click to browse'}
              </p>
              <input
                id='fileInput'
                type='file'
                accept='.csv'
                className='hidden'
                onChange={handleFileChange}
              />
            </div>
            {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
              {success && <p className='mt-2 text-sm text-green-500'>{success}</p>}
            {file && (
              <button
                type='submit'
                className='mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900'
              >
               {/* {isUploading ? 'Uploading...' : 'Upload File'} */}
              {isUploading ? (
  <span className="flex items-center">
    <svg
      className="w-5 h-5 mr-2 text-white animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z"
      ></path>
    </svg>
    Uploading...
  </span>
) : (
  "Upload File"
)}

              </button>
            )}
          </form>

          <Separator />

          <div className='h-screen border  rounded-md shadow flex flex-col lg:flex-row  w-full'>
            <div className='flex-1 flex w-full flex-col h-full   text-white bg-blue-900 pe-[20px] '>
              <ChatNavbar title='AI Agent' />

              <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-blue-900 dark:bg-transparent scrollbar'>
                {conversation.length === 0 ? (
                  <div className='flex md:max-w-2xl mx-auto flex-col min-w-0 gap-6 flex-1'>
                    {/* <MultiModel /> */}
                  </div>
                ) : (
                  <>
                    {conversation.map(message => (
                      <PreviewMessage
                        key={message.id}
                        role={message.role}
                        content={message.content}
                      />
                    ))}
                  </>
                )}
              </div>

              <ModelInput
                input={input}
                setInput={setInput}
                handleSubmit={handleSendQuery}
                isLoading={isLoading}
                stop={stop}
                messages={messages}
              />
            </div>

            {/* <ChatSideBar /> */}
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default AiAgent
