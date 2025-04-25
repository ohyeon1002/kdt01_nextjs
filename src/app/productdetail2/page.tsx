import { Product, products } from "@/types/products";
import Link from "next/link";
export default async function ProductDetail2({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;
  const item: Product | undefined = products.find(
    (element: Product) => element.id == id
  );
  console.log(id)
  if (!item) {
    return <div className="m-10"> 상품이 존재하지 않습니다. </div>;
  }
  return (
    <>
      <Link href="/productlist3">[이전으로]</Link>
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
