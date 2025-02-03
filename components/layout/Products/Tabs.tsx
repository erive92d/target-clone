import { capitalizeFirstLetter } from '@/lib/globals';
import React from 'react'

type TabsType = {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    selectedCategory: string
}

export default function Tabs({ setSelectedCategory, selectedCategory }: TabsType) {

    const categories: string[] = ["men's clothing", "women's clothing", "jewelery", "electronics"]

    return (
        <div className='flex justify-center gap-2 py-8'>
            {categories.map((cat, index) => (
                <button key={index} value={cat} onClick={(e) => setSelectedCategory(e.currentTarget.value)}
                    className={`p-2  font-bold text-black ${selectedCategory === cat ? "bg-orange-600 text-white" : ""}`}
                >
                    {capitalizeFirstLetter(cat)}
                </button>
            ))}
        </div>
    )
}
