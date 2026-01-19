"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { totalQuantity, openCart } = useCart();
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <header className="w-full bg-white shadow-sm">
      {!isAuthPage && (
        <div className="w-full bg-orange-500 text-xs font-medium text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
            <span>COMPRE NO SITE E RECEBA EM CASA</span>
          </div>
        </div>
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
            <span className="text-lg font-semibold">≡</span>
          </div>
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-orange-500">GLASIL</span>
            <span className="text-xs text-zinc-500">Loja Virtual</span>
          </Link>
        </div>

        {!isAuthPage && (
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden flex-1 items-center rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 sm:flex">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-400"
              />
              <span className="ml-2 text-orange-500">🔍</span>
            </div>

            <button
              type="button"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-150 hover:scale-105"
            >
              <span className="text-lg">🛒</span>
              {totalQuantity > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white px-1 text-[10px] font-semibold text-orange-500 shadow-sm">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

