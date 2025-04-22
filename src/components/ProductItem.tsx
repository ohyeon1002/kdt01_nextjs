import { Product } from "@/types/products";
interface ProductItemProps {
  item: Product;
}
export default function ProductItem({ item }: ProductItemProps) {
  return (
    <div className="mt-10 p-7 bg-amber-100">
      <ul>
        <li className="text-center">{item.id}</li>
        <li className="text-center">{item.name}</li>
        <li className="text-center">{item.category}</li>
        <li className="text-center">{item.price}</li>
        <li className="text-center">{item.description}</li>
      </ul>
    </div>
  );
}
