import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">
      <section className="rounded-2xl bg-white px-4 py-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-orange-500">PAGAMENTO POR PIX</p>
            <p className="mt-1 text-sm text-zinc-700">Ganhe 10% de desconto no pagamento à vista.</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-zinc-300" />
            <span className="inline-flex h-2 w-4 rounded-full bg-zinc-800" />
            <span className="inline-flex h-2 w-2 rounded-full bg-zinc-300" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Destaques da semana</h2>
          <div className="mt-1 h-1 w-12 rounded-full bg-orange-500" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
