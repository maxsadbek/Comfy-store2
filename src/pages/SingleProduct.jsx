import { useLoaderData, Link } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => ({
  queryKey: ["singleProduct", id],
  queryFn: () => customFetch(`/products/${id}`),
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id),
    );
    console.log(response.data.data);
    return { product: response.data.data };

  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  console.log("useLoaderData dan keldi →");
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollars = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value) || 1);
  };

  const cartProduct = {
    cartID: `${product.id}-${productColor}`,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className="align-element my-12">
      <div className="text-md breadcrumbs">
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
          className="w-full h-96 object-cover rounded-lg lg:w-full"
        />

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h3 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h3>
          <p className="mt-3 text-2xl font-medium">{dollars}</p>
          <p className="mt-6 leading-8">{description}</p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="flex gap-3 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge w-8 h-8 rounded-full cursor-pointer border-2
                    ${color === productColor ? "border-secondary ring-2 ring-secondary/50" : "border-transparent"}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <span className="label-text font-medium">Amount</span>
            </label>
            <select
              className="select select-secondary select-bordered w-full"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>

          <div className="mt-10">
            <button className="btn btn-secondary btn-lg" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
