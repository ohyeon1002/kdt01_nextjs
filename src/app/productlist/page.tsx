"use client";
import { products, Product } from "@/types/products";
import ProductItem from "@/components/ProductItem";
import { useState } from "react";

export default function ProductList() {
  const [clickId, setClickId] = useState<string>("");
  const handleClick = (id: string) => {
    setClickId(id);
  };
  const item: Product = products.filter(
    (element: Product) => element.id == clickId
  )[0];
  return (
    <>
      <ul className="mt-10">
        {products.map((item: Product) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="my-2 hover:cursor-pointer text-center"
          >
            [{item.id}, {item.name}]
          </li>
        ))}
      </ul>
      {clickId && <ProductItem item={item} />}
    </>
  );
}
