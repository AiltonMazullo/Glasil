"use client";

import { motion } from "framer-motion";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
// import { formatPrice } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product);
  }

  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl border-zinc-100 bg-white p-0 shadow-sm"
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative flex aspect-[3/4] items-center justify-center bg-zinc-50">
        {product.isFeatured && (
          <span className="absolute left-3 top-3 rounded-sm bg-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase text-white">
            Destaque
          </span>
        )}
        <img src={product.imageUrl} alt={product.name} className="max-h-28 object-contain" />
      </div>
      <Card className="flex flex-1 flex-col gap-2 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
          {product.category}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold text-zinc-800">{product.name}</h3>
        <p className="line-clamp-2 text-xs text-zinc-500">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          {/* <span className="text-sm font-semibold text-orange-500">{formatPrice(product.price)}</span> */}
          <button
            type="button"
            onClick={handleAdd}
            className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Comprar
          </button>
        </div>
      </Card>
    </motion.div>
  );
}

