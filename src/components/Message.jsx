'use client';

// import { Attachment, ToolInvocation } from 'ai';
import { motion } from 'framer-motion';
import { Sparkles, UserIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Markdown } from './markdown';
// import { PreviewAttachment } from './preview-attachment';
// import { Weather } from './weather';

export const Message = ({
  role,
  content,
}) => {

  return (
    // <motion.div
    //     className="w-full mx-auto max-w-3xl px-4 group/message"
    //     initial={{ y: 5, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     data-role={role}
    // >
    <div
      className={`flex gap-4 items-start w-fit rounded-xl py-3.5 px-5 ${role === 'user'
        ? 'bg-light ml-auto flex-row-reverse max-w-2xl w-fit'
        : 'bg-light max-w-2xl'
        }`}
    >
      {role === 'assistant' && (
        <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
          <Sparkles className="size-4" />
        </div>
      )}
      {role === 'user' && (
        <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
          <UserIcon className="size-4" />
        </div>
      )}
      <div className="flex flex-col gap-2 w-full">
        {content && (
          <div className={`flex flex-col gap-4 ${role === 'user'
            ? 'bg-blue-500 px-4 py-2 rounded-md'
            : 'bg-light rounded-md'
            }`}>
            <Markdown>{content}</Markdown>
          </div>
        )}

        {/* {toolInvocations && toolInvocations.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {toolInvocations.map((toolInvocation) => {
                    const { toolName, toolCallId, state } = toolInvocation;

                    if (state === 'result') {
                      const { result } = toolInvocation;

                      return (
                        <div key={toolCallId}>
                          {toolName === 'getWeather' ? (
                            <Weather weatherAtLocation={result} />
                          ) : null}
                        </div>
                      );
                    } else {
                      return (
                        <div key={toolCallId} className="skeleton">
                          {toolName === 'getWeather' ? <Weather /> : null}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : null} */}

        {/* {attachments && (
                <div className="flex flex-row gap-2">
                  {attachments.map((attachment) => (
                    <PreviewAttachment
                      key={attachment.url}
                      attachment={attachment}
                    />
                  ))}
                </div>
              )} */}
      </div>
    </div>
    // </motion.div>
  );
};
