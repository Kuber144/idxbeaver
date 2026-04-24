const shortcuts = [
  { action: "Open command palette", keys: ["Cmd", "K"] },
  { action: "Run query", keys: ["Cmd", "Enter"] },
  { action: "Save query", keys: ["Cmd", "S"] },
  { action: "Commit cell edit", keys: ["Enter"] },
  { action: "Cancel cell edit", keys: ["Esc"] },
]

export function Shortcuts() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      Action
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                      Shortcut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shortcuts.map((shortcut, i) => (
                    <tr
                      key={shortcut.action}
                      className={i % 2 === 0 ? "bg-muted/30" : "bg-transparent"}
                    >
                      <td className="px-4 py-3 text-sm">{shortcut.action}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="inline-flex gap-1">
                          {shortcut.keys.map((key) => (
                            <kbd
                              key={key}
                              className="inline-flex h-6 min-w-[24px] items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-xs"
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

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Keyboard-first workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Navigate stores, run queries, and edit cells without touching the mouse. The command
              palette puts every action a keystroke away.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
