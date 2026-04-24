export function Install() {
  return (
    <section id="install" className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Install in under a minute</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Build from source and load as an unpacked extension. No Chrome Web Store required.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-muted/30 text-left">
          <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2">
            <span className="text-xs text-muted-foreground">Terminal</span>
          </div>
          <div className="p-4 font-mono text-sm leading-loose">
            <div className="flex gap-2">
              <span className="select-none text-muted-foreground">$</span>
              <span>git clone https://github.com/Kuber144/idxbeaver</span>
            </div>
            <div className="flex gap-2">
              <span className="select-none text-muted-foreground">$</span>
              <span>cd idxbeaver</span>
            </div>
            <div className="flex gap-2">
              <span className="select-none text-muted-foreground">$</span>
              <span>npm install</span>
            </div>
            <div className="flex gap-2">
              <span className="select-none text-muted-foreground">$</span>
              <span>npm run build</span>
            </div>
          </div>
        </div>

        <ol className="mt-8 space-y-3 text-left text-muted-foreground">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
              1
            </span>
            <span>
              Open <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">chrome://extensions</code>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
              2
            </span>
            <span>Enable Developer mode (top right)</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
              3
            </span>
            <span>
              Click <strong className="text-foreground">Load unpacked</strong> and select the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">dist/</code> directory
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
              4
            </span>
            <span>
              Open DevTools on any page and pick the <strong className="text-foreground">IdxBeaver</strong> panel
            </span>
          </li>
        </ol>
      </div>
    </section>
  )
}
