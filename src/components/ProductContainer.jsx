import { useLoaderData } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import ProductList from "./ProductList";
import { BsGearFill, BsList } from "react-icons/bs";
import { useState } from "react";
import { IoGrid } from "react-icons/io5";

const ProductContainer = () => {
  const { meta } = useLoaderData();
  const totalProduct = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyle = (patter) => {
    return `text-xl btn btn-cicrle btn-sm ${patter === layout ? "btn-primary text-primary-content" : "btn-ghost text- based-content"}`;
  };
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md ">
          {totalProduct} product{totalProduct > 1 && "s"}
        </h4>
        <div className="flex gap-2">
          <button
            type="button"
            className={setActiveStyle("grid")}
            onClick={() => setLayout("grid")}
          >
            <IoGrid />
          </button>
          <button
            type="button"
            className={setActiveStyle("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProduct === 0 ? (
          <h5 className="text-2xl mt-16">Sorry no products matched</h5>
        ) : layout === "grid" ? (
          <ProductGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
