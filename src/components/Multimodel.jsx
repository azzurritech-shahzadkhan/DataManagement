
import { Button } from '@/components/ui/button'; // Make sure this path matches your project
import { motion } from 'framer-motion';


const suggestedActions = [
    {
        title: 'What is the weather',
        label: 'in San Francisco?',
        action: 'What is the weather in San Francisco?',
    },
    {
        title: "Answer like I'm 5,",
        label: 'why is the sky blue?',
        action: "Answer like I'm 5, why is the sky blue?",
    },
    {
        title: 'What is the weather',
        label: 'in San Francisco?',
        action: 'What is the weather in San Francisco?',
    },
    {
        title: "Answer like I'm 5,",
        label: 'why is the sky blue?',
        action: "Answer like I'm 5, why is the sky blue?",
    },
];

export default function MultiModel() {
    return (
        <div className="grid sm:grid-cols-2 gap-2 w-full">
            {suggestedActions.map((suggestedAction, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.05 * index }}
                    key={index}
                    className={index > 1 ? 'hidden sm:block' : 'block'}
                >

                    <Button
                        variant="ghost"
                        // onClick={() => {
                        //     append({
                        //         role: 'user',
                        //         content: suggestedAction.action,
                        //     });
                        // }}
                        className="text-left border  hover:bg-blue-500 hover:text-white transition-all duration-300 dark:bg-transparent rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
                    >
                        <span className="font-medium">{suggestedAction.title}</span>
                        <span className="text-muted-foreground">
                            {suggestedAction.label}
                        </span>
                    </Button>
                </motion.div>
            ))}
        </div>
    );
}
