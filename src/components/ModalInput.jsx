import { useCallback, useEffect, useRef } from 'react'
// import { ChatRequestOptions, CreateMessage, Message } from 'ai'
// import { useToast } from '@/components/UseToast'
import useWindowSize from '@/components/WindowSize'
// import { ArrowUpIcon, PaperclipIcon, StopIcon } from './overviewicons'

import { Button } from '@/components/ui/button'
import { Paperclip, Send, Sparkles, Upload, User } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from './ui/separator'

export default function ModelInput ({
  input,
  setInput,
  isLoading,
  stop,
  messages,
  handleSubmit
}) {
//   const { toast } = useToast()
  const textareaRef = useRef < HTMLTextAreaElement > null
  const { width } = useWindowSize()
  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight()
    }
  }, [])

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 2
      }px`
    }
  }

  const handleInput = (event) => {
    setInput(event.target.value)
    adjustHeight()
  }

  const submitForm = useCallback(() => {
    handleSubmit()

    if (width && width > 768) {
      textareaRef.current?.focus()
    }
  }, [handleSubmit, width])

  return (
    <div className='p-4 bg-blue-900 dark:bg-transparent'>
      <div className='relative bg-blue-900 dark:bg-transparent shadow border flex flex-col items-center rounded-xl'>
        <Textarea
          placeholder='How can I help you?'
          value={input}
          onChange={handleInput}
          className='min-h-[30px] w-full shadow-none border-0 resize-none rounded-xl text-sm focus-visible:ring-0 focus-visible:ring-offset-0 p-4'
          onKeyDown={event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()

              if (isLoading) {
                // toast({
                //   variant: 'destructive',
                //   description:
                //     'Please wait for the model to finish its response!'
                // })
              } else {
                submitForm()
              }
            }
          }}
        />

        <div className='w-full px-4'>
          <Separator />
          <div className='w-full h-full py-2 flex justify-between items-center'>
            <div className='flex gap-2'>
              <Button
                variant='ghost'
                className='px-2 py-0 h-[30px] text-xs shadow hover:text-white bg-blue-500  hover:bg-blue-800'
              >
                <Paperclip className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                className='px-2 py-0 h-[30px] hover:text-white text-xs shadow  bg-blue-500  hover:bg-blue-800'
              >
                <Upload className='h-3 w-3 hover:text-white' />
              </Button>
            </div>

            {isLoading ? (
              <Button
                variant='ghost'
                onClick={event => {
                  event.preventDefault()
                  stop()
                }}
                disabled
                className='px-4 py-2 flex gap-2 bg-blue-900 text-xs text-white'
              >
                <Send className='h-3 w-3' />
                <span>Sending</span>
              </Button>
            ) : (
              <Button
                variant='ghost'
                onClick={event => {
                  event.preventDefault()
                  submitForm()
                }}
                className='px-4 py-2 flex gap-2 bg-blue-500 text-xs text-white hover:bg-blue-900 hover:text-white'
              >
                <Send className='h-3 w-3' />
                <span>Send message</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
