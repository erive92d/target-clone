import Products from "@/components/layout/Products/Products"
import { fetchAll } from "@/lib/store-api/api-calls"

export default async function Home() {

  const products = await fetchAll()

  return (
    <div className="lg:w-4/5 mx-auto">
      {/* <Products products={products} /> */}
    </div>
  )

}
