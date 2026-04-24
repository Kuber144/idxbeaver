import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6" />
          <span className="font-medium">IdxBeaver</span>
        </div>

        <p className="text-sm text-muted-foreground">
          A database client for browser storage.
        </p>

        <a
          href="https://github.com/Kuber144/idxbeaver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
