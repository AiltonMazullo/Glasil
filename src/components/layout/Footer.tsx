export function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-zinc-700 md:flex-row md:justify-between">
        <div className="space-y-2">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-orange-500">GLASIL</span>
            <span className="text-xs text-zinc-500">Loja Virtual</span>
          </div>
          <p className="max-w-xs text-xs text-zinc-500">
            Atendimento para todo o Brasil. Compre e receba em casa ou retire na loja.
          </p>
        </div>
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-zinc-700">Entre em contato</p>
          <p>Tel: (55) 9 9638-5040</p>
          <p>lojavirtual@glasil.com.br</p>
        </div>
        <div className="space-y-3 text-xs">
          <p className="font-semibold text-zinc-700">Siga nas redes</p>
          <div className="flex gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-orange-500">f</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-orange-500">in</span>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-100 bg-zinc-50 py-4 text-center text-[11px] text-zinc-400">
        <span>Site fictício para portfólio. Direitos autorais pertencem à marca original.</span>
      </div>
    </footer>
  );
}

