import Container from './container'
import ChatModel from '@/components/AiAssist/ChatModel'

const AiAssistant = () => {
  return (
    <Container>
      <div>
      
        {/* <div className='border-b border-white/60 pb-[15px]'>
          <p className='text-[24px] text-white font-semibold'>AI Model</p>
          <p className='text-white/60 text-[14px] leading-[19.6px] font-medium'>Chat with our assistant below</p>
        </div> */}
        
        <ChatModel/>
      </div>
    </Container>
  )
}

export default AiAssistant
