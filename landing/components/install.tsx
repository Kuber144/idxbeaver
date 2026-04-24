export function Install() {
  return (
    <section id="install" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-amber-600">Get Started</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Install in a minute
          </h2>
          <p className="mt-3 text-muted-foreground">
            Build from source and load as an unpacked extension.
          </p>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden rounded-lg border border-border bg-surface">
            <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">Terminal</span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-loose">
              {[
                "git clone https://github.com/Kuber144/idxbeaver",
                "cd idxbeaver",
                "npm install",
                "npm run build",
              ].map((cmd, i) => (
                <div key={i} className="flex gap-3">
                  <span className="select-none text-muted-foreground">$</span>
                  <span className="text-foreground">{cmd}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ol className="mt-10 space-y-4">
          {[
            <>
              Open{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                chrome://extensions
              </code>
            </>,
            "Enable Developer mode (top right)",
            <>
              Click <span className="text-foreground">Load unpacked</span> and select{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">dist/</code>
            </>,
            <>
              Open DevTools and pick the <span className="text-foreground">IdxBeaver</span> panel
            </>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-600/10 text-xs font-medium text-amber-600">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
