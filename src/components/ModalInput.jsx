import { useCallback, useEffect, useRef, useState } from 'react'
// import { ChatRequestOptions, CreateMessage, Message } from 'ai'
// import { useToast } from '@/components/UseToast'
import useWindowSize from '@/components/WindowSize'
// import { ArrowUpIcon, PaperclipIcon, StopIcon } from './overviewicons'

import { Button } from '@/components/ui/button'
import { Paperclip, Send, Upload } from 'lucide-react'
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
  const [fileName, setFileName] = useState('Choose CSV File')

  const handleFileChange = event => {
    const file = event.target.files[0]
    setFileName(file ? file.name : 'Choose CSV File')
  }

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 2
      }px`
    }
  }

  const handleInput = event => {
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
            <div className='flex md:gap-5  gap-[7px] items-center'>
              <Button
                variant='ghost'
                className='px-2 py-4 h-[35px] text-xs shadow hover:text-white bg-blue-500  hover:bg-blue-800'
              >
                <Paperclip className='h-4 w-4' />
              </Button>

              {/* <div className=' flex items-center  md:gap-2   rounded border-white bg-blue-500'>
                <label htmlFor='csvUpload' className=' text-[10px] p-2 md:block hidden'>
                  Upload CSV File:
                </label>
                <input
                  type='file'
                  id='csvUpload'
                  accept='.csv'
                  className='hidden'
                  onChange={handleFileChange}
                />
                <lable
                  htmlFor='csvUpload'
                  className='cursor-pointer bg-blue-500 text-white md:text-[13px] text-[10px] md:px-4 px-2 md:py-2 py-[7px] rounded'
                >
                  {fileName}
                </lable>
              </div> */}
            </div>

            {isLoading ? (
              <Button
                variant='ghost'
                onClick={event => {
                  event.preventDefault()
                  stop()
                }}
                disabled
                className='md:px-4 px-2 py-2 flex gap-2 bg-blue-900 text-xs text-white'
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
                className='md:px-4 px-2 md:py-2 flex md:gap-2 gap-[5px] bg-blue-500  py-0 text-white hover:bg-blue-900 hover:text-white text-[12px]'
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
