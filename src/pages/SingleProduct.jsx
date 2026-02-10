import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const res = await customFetch(`/products/${params.id}`);
  return res.data.data;
};

const SingleProduct = () => {
    const [productColor, setProductColor] = useState(colors[0]);
  const product = useLoaderData();
  const { title, price, image, description, category, colors, company } =
    product.attributes;
  const fomatedPrice = formatPrice(price);

  return (
    <div className="align-element my-12">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h3 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h3>
          <p className="mt-3 text-xl ">{formatPrice}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-4">
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 cursor-pointer ${
                    color === productColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                >
                  <span className="sr-only">{color}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
