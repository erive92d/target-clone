import { ProductType } from '@/lib/store-api/globalprops'
import Image from 'next/image'
import React from 'react'

type ItemsProps = {
    items: ProductType[]
}

export default function ShowItems({ items }: ItemsProps) {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {items && items.map((item, index) => (
                <div className='p-6 flex flex-col items-center text-center overflow-hidden w-64 h-64' key={index}>
                    <div className='w-full h-48 relative'>
                        <Image alt="item image" src={item.image} layout="fill"
                            objectFit="contain" />
                    </div>
                    <div className='w-full'>
                        <p className='truncate text-sm'>
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
