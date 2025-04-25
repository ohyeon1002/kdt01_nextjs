import { products, Product } from "@/types/products";
import Link from "next/link";
import { Suspense } from "react";
import ProductAfterWait from "./ProductAfterWait";

export default function ProductList4() {
  return (
    <Suspense fallback={<div>로딩중…</div>}>
      <ProductAfterWait />
    </Suspense>
  );
}
