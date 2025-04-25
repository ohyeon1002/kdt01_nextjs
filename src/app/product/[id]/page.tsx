import { Product, products } from "@/types/products";
import Link from "next/link";
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item: Product = products.filter(
    (element: Product) => element.id == id
  )[0];
  console.log(id)
  return (
    <>
      <Link href="/productlist2">[이전으로]</Link>
      <div className="mt-10 p-7 bg-amber-100">
        <ul>
          <li className="text-center">{item.id}</li>
          <li className="text-center">{item.name}</li>
          <li className="text-center">{item.category}</li>
          <li className="text-center">{item.price}</li>
          <li className="text-center">{item.description}</li>
        </ul>
      </div>
    </>
  );
}
