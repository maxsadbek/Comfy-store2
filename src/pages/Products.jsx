import { Filters, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);

  const res = await customFetch(url, {params});
  const products = res.data.data;
  const meta = res.data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <div className="align-element">
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
