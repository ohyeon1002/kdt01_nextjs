import { products, Product } from "@/types/products";
import Link from "next/link";

export default function ProductList2() {
  return (
    <ul className="mt-10">
      {products.map((item: Product) => (
        <li key={item.id} className="my-2">
          <Link href={`/product/${item.id}`}>
            [{item.id}, {item.name}]
          </Link>
        </li>
      ))}
    </ul>
  );
}
