import { FeatureProducts, Hero } from "../components";
import ProductGrid from "../components/ProductGrid";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  // ProductGrid "const { products } = useLoaderData()" deb kutayotgani uchun ob'ekt qaytaramiz
  return { products };
};

const Landing = () => {
  return (
    <div className="align-element">
      {" "}
      {/* Klass nomi to'g'rilandi */}
      <Hero />
      <FeatureProducts />
      <ProductGrid />
    </div>
  );
};

export default Landing;
