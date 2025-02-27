import { ProductType } from '@/lib/store-api/globalprops'
import CarouselComponent from '@/components/reusables/CarouselComponent'
interface TrendingProps {
    lowPriced?: ProductType[]

}

export default function Trending({ lowPriced }: TrendingProps) {
    return (
        <div className=' bg-red-100 px-8 py-6'>
            <h1 className='text-2xl font-bold text-center py-4'>
                Under $30 you'll love
            </h1>
            {lowPriced && <CarouselComponent products={lowPriced} />}
        </div>
    )
}
