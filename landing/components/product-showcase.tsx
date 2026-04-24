import Image from "next/image"

export function ProductShowcase() {
  return (
    <section className="relative pb-20 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-xl border border-border bg-muted/50 shadow-2xl shadow-black/50">
          {/* Window chrome */}
          <div className="flex h-10 items-center gap-2 border-b border-border bg-muted px-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-border" />
              <div className="h-3 w-3 rounded-full bg-border" />
              <div className="h-3 w-3 rounded-full bg-border" />
            </div>
            <div className="flex-1 text-center text-xs text-muted-foreground">
              Chrome DevTools
            </div>
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

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-4xl opacity-30 blur-3xl">
          <div className="h-full w-full rounded-full bg-accent/20" />
        </div>
      </div>
    </section>
  )
}
