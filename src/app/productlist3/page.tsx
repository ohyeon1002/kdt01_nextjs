import { products, Product } from "@/types/products";
import Link from "next/link";

export default function ProductList3() {
  return (
    <ul className="mt-10">
      {products.map((item: Product) => (
        <li key={item.id} className="my-2">
          <Link href={`/productdetail2?id=${item.id}`}>
            [{item.id}, {item.name}]
          </Link>
        </li>
      ))}
    </ul>
  );
}
