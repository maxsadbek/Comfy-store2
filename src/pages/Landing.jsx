import { Hero } from "../components"
import { customFetch } from "../utils"
const url = "/products?featured=true"

export const loader = async () =>{
  const response = await customFetch(url)
  const products = response.data.data
  console.log(products);
  
}

const Landing = () => {
  return (
    <div className="aline-element">
      <Hero />
    </div>
  )
}

export default Landing
