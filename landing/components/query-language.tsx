export function QueryLanguage() {
  return (
    <section id="query" className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              MongoDB-style query language
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Filter, project, sort, and limit with a familiar syntax. Index-aware plan selection
              under the hood, with in-memory filter fallback for compound operators.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Full operator support</p>
                  <p className="text-sm text-muted-foreground">
                    $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex, $and, $or, $not
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Query plan visibility</p>
                  <p className="text-sm text-muted-foreground">
                    See which index is being used, or if it falls back to a full scan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Schema-aware autocomplete</p>
                  <p className="text-sm text-muted-foreground">
                    Field names, operators, and values suggested based on inferred schema.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
            <div className="flex h-9 items-center gap-2 border-b border-border bg-muted px-4">
              <span className="text-xs text-muted-foreground">Query Editor</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-muted-foreground">{"{"}</span>
                {"\n"}
                {"  "}<span className="text-accent">{'"store"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-foreground">{'"contextDB"'}</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}<span className="text-accent">{'"filter"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>
                {"\n"}
                {"    "}<span className="text-foreground">{'"contextProvider"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-foreground">{'"fireflies"'}</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"    "}<span className="text-foreground">{'"id"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>{" "}
                <span className="text-accent">{'"$gt"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-foreground">10</span>{" "}
                <span className="text-muted-foreground">{"}"}</span>
                {"\n"}
                {"  "}<span className="text-muted-foreground">{"}"},</span>
                {"\n"}
                {"  "}<span className="text-accent">{'"project"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">[</span>
                <span className="text-foreground">{'"id"'}</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-foreground">{'"contextType"'}</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-foreground">{'"createdAt"'}</span>
                <span className="text-muted-foreground">]</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}<span className="text-accent">{'"sort"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>{" "}
                <span className="text-foreground">{'"createdAt"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-foreground">-1</span>{" "}
                <span className="text-muted-foreground">{"}"}</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}<span className="text-accent">{'"limit"'}</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-foreground">50</span>
                {"\n"}
                <span className="text-muted-foreground">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
