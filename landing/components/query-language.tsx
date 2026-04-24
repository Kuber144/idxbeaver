export function QueryLanguage() {
  return (
    <section id="query" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-amber-600">Query Language</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              MongoDB-style queries
            </h2>
            <p className="mt-3 text-muted-foreground">
              Filter, project, sort, and limit with a familiar syntax. Index-aware 
              plan selection under the hood.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Full operator support",
                  desc: "$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex, $and, $or, $not",
                },
                {
                  title: "Query plan visibility",
                  desc: "See which index is used, or if it falls back to a full scan.",
                },
                {
                  title: "Schema-aware autocomplete",
                  desc: "Field names and operators suggested based on inferred schema.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600" />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-border via-border/50 to-border/50" />
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
              <div className="flex h-9 items-center border-b border-border bg-muted/30 px-4">
                <span className="text-xs text-muted-foreground">query.json</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
                <code>
                  <span className="text-muted-foreground">{"{"}</span>
                  {"\n"}
                  {"  "}<span className="text-amber-500">{'"store"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-400">{'"contextDB"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {"  "}<span className="text-amber-500">{'"filter"'}</span>
                  <span className="text-muted-foreground">: {"{"}</span>
                  {"\n"}
                  {"    "}<span className="text-foreground">{'"provider"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-400">{'"fireflies"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {"    "}<span className="text-foreground">{'"id"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-muted-foreground">{"{"}</span>{" "}
                  <span className="text-amber-500">{'"$gt"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-blue-400">10</span>{" "}
                  <span className="text-muted-foreground">{"}"}</span>
                  {"\n"}
                  {"  "}<span className="text-muted-foreground">{"}"},"</span>
                  {"\n"}
                  {"  "}<span className="text-amber-500">{'"sort"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-muted-foreground">{"{"}</span>{" "}
                  <span className="text-foreground">{'"createdAt"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-blue-400">-1</span>{" "}
                  <span className="text-muted-foreground">{"}"},"</span>
                  {"\n"}
                  {"  "}<span className="text-amber-500">{'"limit"'}</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-blue-400">50</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
