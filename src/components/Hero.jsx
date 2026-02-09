import { Link } from "react-router-dom"
import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carauselImg = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="align-element grid lg:grid-cols-2 gap-24">
      <div>
        <h1 className="max-w-2xl text-4xl font font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus axpedita commodi delectus molestias incidunt nemo ducimus sequi blanditiis axplicabo quaeret?</p>
        <div className="mt-10">
          <Link to={"/products"} className="btn btn-primary uppercase">Our products</Link>
        </div>
      </div>
      <div className="hidden lg:inline-flex h-[28rem] lg:carousel carousel-center bg-neutral rounded-box">
          {
            carauselImg.map((image)=>{
              return <div key={image} className="carousel-item p-3">
                <img src={image} alt="hero images" className="object-cover rounded-box h-full w-80" />
              </div>
            })
          }
      </div>
    </div>
  )
}

export default Hero
