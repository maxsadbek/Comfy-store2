import { Filter, Pogination, ProductContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  const res = await customFetch(url);
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta };
};
const Products = () => {
  return (
    <div className="flex items-center justify-center">
      <Filter />
      <ProductContainer />
      <Pogination />
    </div>
  );
};

export default Products;
