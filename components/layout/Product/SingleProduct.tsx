"use client"

import RatingStars from '@/components/reusables/RatingStars'
import { ProductType } from '@/lib/store-api/globalprops'
import Image from 'next/image'
import React from 'react'

type SingleProductProp = {
    product: ProductType
}

export default function SingleProduct({ product }: SingleProductProp) {
    console.log("client side", product)
    const sizeOptions = ["xs", "s", "m", "lg"]

    return (
        <div>
            <div className="flex">
                <div className="flex-1">
                    <Image src={product.image} height={220} width={320} alt="image" />
                </div>
                <div className="font-bold text-2xl flex flex-col flex-1 gap-4">
                    <h1>
                        {product.title}
                    </h1>
                    <RatingStars rating={Math.floor(product.rating.rate)} />
                    <p>
                        ${product.price}
                    </p>
                    {product.category === "men's clothing" || product.category === "women's clothing" ?
                        <ul className="flex gap-2">
                            {sizeOptions.map((sze, index) => (
                                <li key={index} className="btn text-gray-700 bg-white border-gray-600 font-semibold  btn-square ">
                                    {sze.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                        : null
                    }
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}
