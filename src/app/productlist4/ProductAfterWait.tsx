"use client";
import { Product, products } from "@/types/products";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductAfterWait() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const item: Product | undefined = products.find(
    (item: Product) => item.id === id
  );

  if (!item) {
    return <ul className="mt-10">
    {products.map((item: Product) => (
      <li key={item.id} className="my-2">
        <Link href={`/productdetail4?id=${item.id}`}>
          [{item.id}, {item.name}]
        </Link>
      </li>
    ))}
  </ul>
  }

  return (
    <>
      <Link href="/productlist4">[이전으로]</Link>
      <div className="mt-10 p-7 bg-amber-100">
        <ul>
          <li className="text-center"> {item.id} </li>
          <li className="text-center"> {item.name} </li>
          <li className="text-center"> {item.price} </li>
          <li className="text-center"> {item.description} </li>
        </ul>
      </div>
    </>
  );
}
