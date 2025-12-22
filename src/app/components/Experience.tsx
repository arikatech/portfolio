import { experiences } from "./experience-data";
import ExternalArrow from "./Arrow";

export default function Experience() {
  return (
    <div className="space-y-16">
      {/* Section title */}
      <div className="space-y-2">
        <p className="text-xs tracking-[0.25em] uppercase text-[color:var(--text-muted)]">
          Experience
        </p>
        <h2 className="text-2xl font-[var(--font-display)] tracking-tight">
          Where I’ve worked
        </h2>
      </div>

      {/* Experience list */}
      <ol className="space-y-12">
        {experiences.map((exp, idx) => (
          <li key={idx}>
            <article
              className="
                group relative grid gap-6
                sm:grid-cols-[140px_1fr]
                rounded-xl
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
                  border
                  border-white/10
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 60%)",
                }}
              />

              {/* Period */}
              <header className="relative z-10 text-xs font-medium uppercase tracking-wide text-[color:var(--text-muted)]">
                {exp.period}
              </header>

              {/* Content */}
              <div className="relative z-10 space-y-3">
                {/* Role + company */}
                <h3 className="text-base font-semibold leading-snug">
                  {exp.role} ·{" "}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[color:var(--accent-secondary)] hover:underline"
                  >
                    {exp.company}
                    <ExternalArrow
                      className="
                        text-[color:var(--accent-secondary)]
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />

                  </a>
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {exp.description}
                </p>

                {/* Tech pills */}
                <ul className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tech) => (
                    <li
                      key={tech}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-3 py-1
                        text-xs
                        text-[color:var(--accent-primary)]
                        transition
                        hover:border-white/20
                        hover:bg-white/10
                      "
                      >
                      {tech}
                      </li>

                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>

      {/* Resume link */}
      <div className="pt-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-[color:var(--accent-secondary)]
            hover:underline
          "
        >
          View full résumé
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
