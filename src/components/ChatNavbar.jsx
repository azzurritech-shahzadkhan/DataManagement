import  { useState } from 'react'
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import Image from 'next/image';

export default function ChatNavbar({title}) {

    const options = [
        {
            id: 1,
            value: 'user1',
            label: 'Peter Taylor',
            image: 'https://readymadeui.com/profile_3.webp',
            isSelected: true,
        },
        {
            id: 2,
            value: 'user2',
            label: 'Johne Words',
            image: 'https://readymadeui.com/profile_4.webp',
            isSelected: false,
        },
        {
            id: 3,
            value: 'user3',
            label: 'Alen Walwa',
            image: 'https://readymadeui.com/profile_5.webp',
            isSelected: false,
        },
    ];

    // const [selectedOption, setSelectedOption] = useState(options[0]);

    // const handleSelectChange = (value) => {
    //     const newSelectedOption = options.find(option => option.value === value);
    //     if (newSelectedOption) {
    //         setSelectedOption(newSelectedOption);
    //     }
    // };

    return (
        <div className="px-4 py-3 bg-blue-900 text-white dark:bg-transparent border-b shadow flex items-center justify-between">
            <div className='flex items-center gap-3'>
                <h2 className="text-lg font-normal tracking-tight">
             {title}
                </h2>
                <span className='text-sm text-white cursor-pointer'>See Details</span>
            </div>
         
        </div>
    )
}
