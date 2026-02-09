import { FeatureProducts, Hero } from "../components"
import ProductGrid from "../components/ProductGrid"
import { customFetch } from "../utils"
const url = "/products?featured=true"

export const loader = async () =>{
  const response = await customFetch(url)
  const products = response.data.data
  return products
}

const Landing = () => {
  return (
    <div className="aline-element">
      <Hero />
      <FeatureProducts />
      <ProductGrid />
    </div>
  )
}

export default Landing
