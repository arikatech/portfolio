import Image from "next/image";
import { projects } from "./projects-data";
import ExternalArrow from "./Arrow";

export default function Projects() {
  return (
    <div className="space-y-16">
      <div className="space-y-2">
        <p className="text-xs tracking-[0.25em] uppercase text-[color:var(--text-muted)]">
          Projects
        </p>
        <h2 className="text-2xl font-[var(--font-display)] tracking-tight">
          Things I’ve built
        </h2>
      </div>

      <ul className="space-y-20">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <li key={project.title}>
              <article
                className="
                  group relative
                  grid items-center gap-8
                  md:grid-cols-12
                "
              >
                <div
                  className="
                    pointer-events-none absolute -inset-4 rounded-2xl
                    border border-white/10 opacity-0 transition
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(56,189,248,0.15), transparent 60%)",
                  }}
                />

                <div
                  className={[
                    "relative z-10 space-y-4 md:col-span-6",
                    isEven
                      ? "md:order-1 md:col-start-1 md:text-left"
                      : "md:order-2 md:col-start-7 md:text-right",
                  ].join(" ")}
                >
                  <h3 className="text-xl font-semibold">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[color:var(--text-main)] hover:underline"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {project.description}
                  </p>

                  <ul
                    className={[
                      "flex flex-wrap gap-2",
                      !isEven ? "md:justify-end" : "",
                    ].join(" ")}
                  >
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="
                          rounded-full border border-white/10 bg-white/5
                          px-3 py-1 text-xs
                          text-[color:var(--accent-primary)]
                          transition hover:border-white/20 hover:bg-white/10
                        "
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={[
                    "relative z-10 md:col-span-6",
                    isEven
                      ? "md:order-2 md:col-start-7"
                      : "md:order-1 md:col-start-1",
                  ].join(" ")}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {/* Resume link */}
            <div className="pt-4">
              <a
                href="https://github.com/arikatech"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-sm font-medium
                  text-[color:var(--accent-secondary)]
                  hover:underline
                "
              >
                View full Github
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