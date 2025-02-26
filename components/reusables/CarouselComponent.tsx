import { ProductType } from "@/lib/store-api/globalprops"
import Image from "next/image"


interface CarouselProp {
    product: ProductType
    index: number
}


export const CarouselComponent = ({ product, index }: CarouselProp) => (
    <div key={index} className='carousel-item bg-white w-48 py-4 px-2 flex-col'>
        <div className="w-32 h-48 relative mx-auto">
            <Image
                layout='fill'
                objectFit="contain"
                src={product.image}
                alt="Burger" />
        </div>
        <p className='font-bold'>
            ${product.price}
        </p>
        <h1 className=' truncate'>
            {product.title}
        </h1>
    </div>

)