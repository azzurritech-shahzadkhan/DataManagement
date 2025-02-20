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
import MultiModel from '@/components/Multimodel'
import ChatNavbar from '@/components/ChatNavbar'
const AiAgent = () => {
  const [conversation, setConversation] = useState([])
  const { messages, input, setInput, isLoading, stop } = useChat();
  const [isSending, setIsSending] = useState(false)
  const [botMessage, setBotMessage] = useState('')
  console.log('conversation  value is coming here', conversation)

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
    formData.append('index_name', 'm1')

    try {
      const response = await fetch(
        'https://x7zb2lx4-8000.inc1.devtunnels.ms/ask',
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
          <Separator />

          <div className='h-screen border  rounded-md shadow flex flex-col lg:flex-row  w-full'>
            <div className='flex-1 flex w-full flex-col h-full   text-white bg-blue-900 pe-[20px] '>
              <ChatNavbar title='AI Agent' />

              <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-blue-900 dark:bg-transparent scrollbar'>
                {conversation.length === 0 ? (
                  <div className='flex md:max-w-2xl mx-auto flex-col min-w-0 gap-6 flex-1'>
                    <MultiModel />
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
