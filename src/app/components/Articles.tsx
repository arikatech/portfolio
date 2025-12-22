import { articles } from "./articles-data";
import ExternalArrow from "./Arrow";

export default function Articles() {
  return (
    <div className="space-y-16">
      {/* Section title */}
      <div className="space-y-2">
        <p className="text-xs tracking-[0.25em] uppercase text-[color:var(--text-muted)]">
          Articles
        </p>
        <h2 className="text-2xl font-[var(--font-display)] tracking-tight">
          Writing & thoughts
        </h2>
      </div>

      {/* Articles list */}
      <ol className="space-y-6">
        {articles.map((article, idx) => (
          <li key={idx}>
            <a
              href={article.link}
              className="
                group relative
                block rounded-xl
                p-4 sm:p-6
                transition
                hover:bg-white/5
              "
            >
              {/* Hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-xl
                  opacity-0
                  transition
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle at left, rgba(255,110,199,0.12), transparent 60%)",
                }}
              />

              <div className="relative z-10 grid gap-4 sm:grid-cols-[80px_1fr]">
                {/* Date */}
                <span className="text-xs font-medium text-[color:var(--text-muted)]">
                  {article.date}
                </span>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold leading-snug">
                    <span className="group-hover:underline">
                      {article.title}
                    </span>
                  </h3>

                  <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {article.description}
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>

      {/* Optional footer link */}
      <div>
        <a
          href="#"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-[color:var(--accent-secondary)]
            hover:underline
          "
        >
          View all writing
          <ExternalArrow
            className="
              text-[color:var(--accent-secondary)]
              transition-transform
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />

        </a>
      </div>
    </div>
  );
}
