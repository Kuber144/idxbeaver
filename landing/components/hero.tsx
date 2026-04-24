export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] opacity-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-600/30 via-amber-600/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-sm text-muted-foreground">Chrome DevTools Extension</span>
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          A database client for
          <br />
          <span className="text-amber-500">browser storage</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          Browse, query, edit, and export IndexedDB, LocalStorage, SessionStorage, 
          Cookies, and Cache Storage with a proper database client interface.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#install"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 text-sm font-medium text-white transition-all hover:bg-amber-500"
          >
            Get Started
            <svg 
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="https://github.com/Kuber144/idxbeaver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {["IndexedDB", "LocalStorage", "SessionStorage", "Cookies", "Cache API"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-amber-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
