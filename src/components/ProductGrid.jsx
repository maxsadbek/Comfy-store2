import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductGrid = () => {
  const products = useLoaderData();
  console.log(products);


  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 align-element">
      {products.map((items) => {
        const { id } = items;
        const { image, title, price } = items.attributes;
        const fomatedPrice = formatPrice(price)

        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-200"
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-58 w-full object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{fomatedPrice}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
