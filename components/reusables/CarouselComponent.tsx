import { ProductType } from "@/lib/store-api/globalprops"
import Image from "next/image"
import Link from "next/link"


interface CarouselProp {
    products: ProductType[]
}

export default function CarouselComponent({ products }: CarouselProp) {
    return (
        <div className='carousel w-full gap-4'>
            {products && products.map((item, index) => (
                <div key={index} className='carousel-item bg-white w-48 p-4 flex-col text-sm rounded-xl'>
                    <div className="w-32 h-48 relative mx-auto">
                        <Image layout="fill" objectFit="contain" src={item.image} alt="image" />
                    </div>
                    <p className='font-bold'>
                        ${item.price}
                    </p>
                    <Link href={`/product/${item.id}`} className='truncate link-hover'>
                        {item.title}
                    </Link>
                    <button className="bg-red-700 rounded-2xl py-2 font-semibold text-xs text-white mt-4">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}

