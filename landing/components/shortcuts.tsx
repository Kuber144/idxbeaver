const shortcuts = [
  { action: "Command palette", keys: ["⌘", "K"] },
  { action: "Run query", keys: ["⌘", "↵"] },
  { action: "Save query", keys: ["⌘", "S"] },
  { action: "Commit edit", keys: ["↵"] },
  { action: "Cancel", keys: ["Esc"] },
]

export function Shortcuts() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="lg:order-2">
            <p className="text-sm font-medium text-amber-600">Workflow</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Keyboard-first
            </h2>
            <p className="mt-3 text-muted-foreground">
              Navigate stores, run queries, and edit cells without touching the mouse.
              The command palette puts every action a keystroke away.
            </p>
          </div>

          <div className="lg:order-1">
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                      Action
                    </th>
                    <th className="px-4 py-2.5 text-right text-xs font-medium text-muted-foreground">
                      Shortcut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shortcuts.map((shortcut, i) => (
                    <tr
                      key={shortcut.action}
                      className={i !== shortcuts.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-4 py-2.5 text-sm">{shortcut.action}</td>
                      <td className="px-4 py-2.5 text-right">
                        <div className="inline-flex gap-1">
                          {shortcut.keys.map((key, j) => (
                            <kbd
                              key={j}
                              className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-xs text-muted-foreground"
                            >
                              {key}
                            </kbd>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
