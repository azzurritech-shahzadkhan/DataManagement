import { PlusIcon, Edit2Icon, TrashIcon, MoreHorizontal, Trash } from 'lucide-react';
import { useState } from 'react';
import { dummyData as initialData } from "@/assets/mock-data/data";
import { AlertModal } from '@/components/modal/AlertModal';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
// import { useToast } from "@/components/UseToast";



export default function ChatSideBar() {
    const [dummyData, setDummyData] = useState(initialData); // Manage state with useState
    const [open, setOpen] = useState(false); // Modal state
    const [loading, setLoading] = useState(false); // Loading state
    const [chatToDelete, setChatToDelete] = useState(null); // Track the chat to delete
    // const { toast } = useToast();

    // const onConfirm = async () => {
    //     if (chatToDelete !== null) {
    //         setLoading(true);
    //         // Simulating the deletion of the conversation by its id
    //         setTimeout(() => {
    //             setDummyData((prevData) =>
    //                 prevData.filter((chat) => chat.conversation_Id !== chatToDelete)
    //             );
    //             setLoading(false);
    //             setOpen(false);
    //             toast({
    //                 description: "Conversation deleted successfully",
    //             });
    //         }, 500);
    //     }
    // };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                // onConfirm={onConfirm}
                loading={loading}
            />
            <nav className="bg-blue-600 border-l dark:bg-transparent shadow-lg min-w-[270px] py-3 px-4 font-[sans-serif] flex flex-col overflow-auto">
                <div className="flex w-full items-center justify-between mb-4">
                    <button
                        title="Create New Chat"
                        className="flex w-full border shadow hover:shadow-none hover:bg-blue-900 cursor-pointer items-center space-x-2 p-2 rounded-sm transition group"
                    >
                        <PlusIcon className="h-5 w-5 text-white dark:group-hover:text-white" />
                        <p className="text-white dark:text-gray-300  ">New Chat</p>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4">
                    {dummyData.length > 0 ? (
                        dummyData.map((chat) => (
                            <div
                                key={chat.conversation_Id}
                                className="flex items-center justify-between px-3 py-2 rounded-sm bg-blue-500 dark:bg-gray-600 hover:bg-blue-900 dark:hover:bg-slate-400 transition cursor-pointer group"
                            >
                                <p className="text-sm dark:group-hover:text-white text-white dark:text-gray-400 truncate ">
                                    {chat.conv_slug.length > 25 ? `${chat.conv_slug.slice(0, 24)}...` : chat.conv_slug}
                                </p>

                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0 text-white">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem
                                            onClick={() => {
                                                setChatToDelete(chat.conversation_Id); // Set the chat ID to be deleted
                                                setOpen(true); // Open the confirmation modal
                                            }}
                                        >
                                            <Trash className="mr-2 h-4 w-4 " /> Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ))
                    ) : (
                        <p className="text-blue-500 text-sm text-center mt-4">No conversations found</p>
                    )}
                </div>
            </nav>
        </>
    );
}
