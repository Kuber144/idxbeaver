import Image from "next/image"

export function ProductShowcase() {
  return (
    <section className="relative pb-24 md:pb-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-amber-600/20 via-border/50 to-border/50 opacity-60" />
          
          {/* Main container */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
            {/* Window chrome */}
            <div className="flex h-10 items-center gap-2 border-b border-border bg-muted/50 px-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground">DevTools — IdxBeaver</span>
              </div>
              <div className="w-[52px]" />
            </div>

            <Image
              src="/product_demo.png"
              alt="IdxBeaver interface showing IndexedDB browser with data grid, query editor, and row inspector"
              width={1400}
              height={840}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
