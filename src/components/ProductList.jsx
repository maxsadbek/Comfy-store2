import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductList = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <div className="pt-12 grid gap-y-8 ">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollars = formatPrice(price);

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className=" p-8 rounded-lg flex flex-col sm:flex-row gap-y-8 flex-wrap bg-base-100 hover:shadow-2xl duration-200 group shadow-xl "
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300 hover:scale-105"
            />
            <div className="ml-0 sm:ml-16 ">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">{dollars}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
