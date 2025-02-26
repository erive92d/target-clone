import { CarouselComponent } from '@/components/reusables/CarouselComponent'
import { ProductType } from '@/lib/store-api/globalprops'

interface TrendingProps {
    lowPriced?: ProductType[]

}

export default function Trending({ lowPriced }: TrendingProps) {
    return (
        <div className=' bg-slate-300 px-8 py-6'>
            <h1 className='text-2xl font-bold text-center py-4'>
                Under $30 you'll love
            </h1>
            <div className='carousel w-full gap-4 '>
                {lowPriced && lowPriced.map((item, index) => (
                    <CarouselComponent index={index} product={item} />
                ))}
            </div>
        </div>
    )
}
