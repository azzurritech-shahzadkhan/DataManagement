
import{ useState } from "react";
// import  {Breadcrumbs}  from "@/components/BreadCrumbs";
import  Heading  from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import AimodelOverview from "./AiModelOverview";
import { Message as PreviewMessage } from "@/components/Message";

import ModelInput from "@/components/ModalInput";


// import ChatSideBar from "@/components/ChatSideBar"
import PageContainer from "./PageContainer";
import MultiModel from "../Multimodel";
import ChatNavbar from "../ChatNavbar";
// import ChatSideBar from "../ChatSideBar";

const breadcrumbItems = [
  { title: "Dashboard", link: "/" },
  { title: "AI_ChatModel", link: "/aiassistant"},
];



export default function ChatModel() {
  const [conversation, setConversation] = useState([]);
  const { messages, input, setInput, isLoading, stop } = useChat();
  const [isSending, setIsSending] = useState(false);
  const [botMessage, setBotMessage] = useState("");

  // useEffect(() => {
  //   const fetchConversations = async () => {
  //     try {
  //       const response = await fetch("/api/chatsession", { method: "GET" });
  //       const data = await response.json();

  //       const loadedMessages = data.flatMap((session) => session.chatMessages || []);
  //       setConversation(loadedMessages);
  //     } catch (error) {
  //       console.error("Error fetching conversations:", error);
  //     }
  //   };
  //   fetchConversations();
  // }, []);



  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setIsSending(true);
    setBotMessage("");

    try {
      const userMessage = { role: "user", content: input };
      setConversation((prev) => [...prev, userMessage]);
      setInput("");

      const response = await fetch("https://dashboard-agent-api.thinkalizeglobal.com/api/agent/execute", {
        method: "POST",
        headers: {
          accept: "application/x-ndjson",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4-turbo",
          temperature: 0.2,
          max_tokens: 1000,
          stream: true,
          messages: [
            ...conversation,
            userMessage,
          ],
        }),
      });

      if (!response.body) {
        throw new Error("Readable stream not supported in the response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let aiResponse = "";
      let isThinking = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        if (chunk.trim() === "") continue;

        if (chunk.includes("[tool_start]")) {
          isThinking = true;

          setConversation((prev) => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === "assistant") {
              return [
                ...prev.slice(0, -1),
                { ...lastMessage, content: `${lastMessage.content} thinking...` },
              ];
            } else {
              return [...prev, { role: "assistant", content: "thinking..." }];
            }
          });
          continue;
        }

        if (chunk.includes("[tool_end]")) {
          isThinking = false;
          continue;
        }

        if (!isThinking) {
          aiResponse += chunk;

          setConversation((prev) => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === "assistant") {
              return [
                ...prev.slice(0, -1),
                { ...lastMessage, content: aiResponse },
              ];
            } else {
              return [...prev, { role: "assistant", content: aiResponse }];
            }
          });
        }
      }

      const aiMessage = { role: "assistant", content: aiResponse };

      await saveConversation([...conversation, userMessage, aiMessage]);

    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

const saveConversation = async (conversationData) => {
  try {
    await fetch("/api/chatsession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation: conversationData }),
    });
  } catch (error) {
    console.error("Error saving conversation:", error);
  }
};

const handleFormSubmit = (event) => {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  handleSendMessage();
};



  return (
    <PageContainer scrollable={true} >
      <div className="space-y-4  flex flex-col items-center justify-center w-full  ">
        {/* <Breadcrumbs items={breadcrumbItems} />  */}

        <div className="flex items-start justify-between text-white w-full">
          <Heading title="AI Model" description="Chat with our AI assistant below." />
        </div>
        <Separator />

        <div className="h-screen border  rounded-md shadow flex flex-col lg:flex-row  w-full ">

          <div className="flex-1 flex w-full flex-col h-full   text-white bg-blue-900 pe-[20px] ">
            <ChatNavbar  title="AI Assistant"/>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-blue-900 dark:bg-transparent scrollbar">
              {conversation.length === 0 && !botMessage ? (
                <div className="flex md:max-w-2xl  mx-auto flex-col min-w-0 gap-6 flex-1">
                  {/* <AimodelOverview /> */}
                  <MultiModel />
                </div>
              ) : (
                <>
                  {conversation.map((message) => (
                    <PreviewMessage
                      key={message.id}
                      role={message.role}
                      content={message.content}
                    />
                  ))}

                  {botMessage && (
                    <PreviewMessage key="streamedBotMessage" role="assistant" content={botMessage} />
                  )}

                </>
              )}
            </div>

            <ModelInput
              input={input}
              setInput={setInput}
              handleSubmit={handleFormSubmit}
              isLoading={isLoading}
              stop={stop}
              messages={messages}
            />
          </div>

          {/* <ChatSideBar /> */}

        </div>
      </div>
    </PageContainer>
  );
}
