import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-5 w-5" />
          <span className="text-sm font-medium">IdxBeaver</span>
        </div>

        <p className="text-xs text-muted-foreground">
          A database client for browser storage.
        </p>

        <a
          href="https://github.com/Kuber144/idxbeaver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
