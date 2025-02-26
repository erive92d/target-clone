import Trending from "@/components/layout/Product/Trending"
import { fetchAll } from "@/lib/store-api/api-calls"
import { ProductType } from "@/lib/store-api/globalprops"


export default async function Home() {

  const products = await fetchAll()
  const lowPricedItems = await products.filter((prod: ProductType) => prod.price < 30)
  console.log(lowPricedItems, "low")
  return (
    <div className="lg:w-4/5 mx-auto py-8">
      <Trending lowPriced={lowPricedItems} />
    </div>
  )

}
