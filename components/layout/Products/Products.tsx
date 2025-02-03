
"use client"
import { ProductType } from '@/lib/store-api/globalprops'
import React, { useEffect, useState } from 'react'
import ShowItems from './ShowItems'
import Tabs from './Tabs'

type ProductTypes = {
    products: ProductType[]
}


export default function Products({ products }: ProductTypes) {

    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [filteredItems, setFilteredItems] = useState<ProductType[]>([])

    useEffect(() => {
        if (selectedCategory) {
            const filter = products.filter(prod => prod.category === selectedCategory)
            setFilteredItems(filter)
        } else {
            setFilteredItems(products)
        }
    }, [selectedCategory])

    return (
        <>
            <Tabs setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            <ShowItems items={filteredItems} />
        </>
    )
}
