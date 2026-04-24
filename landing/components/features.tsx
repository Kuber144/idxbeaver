const features = [
  {
    title: "Data Grid",
    description:
      "Zebra-striped rows, column pinning, resize handles, sticky headers. TablePlus-level inspection.",
  },
  {
    title: "Row Inspector",
    description:
      "Per-field editing with type indicators, NULL handling, and syntax-highlighted JSON.",
  },
  {
    title: "Query History",
    description:
      "Auto-recorded per origin. Star queries worth keeping. One-click replay.",
  },
  {
    title: "Import / Export",
    description:
      "NDJSON, CSV, SQL INSERT, ZIP snapshots. Round-trips Date, BigInt, Map, Set, Blob.",
  },
  {
    title: "Schema Inference",
    description:
      "Samples 500 rows per store. Drives autocomplete. TypeScript schema export.",
  },
  {
    title: "Snapshots + Diff",
    description:
      "Snapshot a store or database. Restore or diff against it later.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="text-sm font-medium text-amber-600">Features</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Everything you need
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            The workflow you use with TablePlus or DataGrip, now for browser storage.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface p-6 transition-colors hover:bg-muted/50"
            >
              <h3 className="text-sm font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
