import Image from "next/image";
import { projects } from "./projects-data";

export default function Projects() {
  return (
    <div className="space-y-16">
      {/* Section title */}
      <div className="space-y-2">
        <p className="text-xs tracking-[0.25em] uppercase text-[color:var(--text-muted)]">
          Projects
        </p>
        <h2 className="text-2xl font-[var(--font-display)] tracking-tight">
          Things I’ve built
        </h2>
      </div>

      {/* Project list */}
      <ul className="space-y-20">
        {projects.map((project, idx) => (
          <li key={project.title}>
            <article
              className="
                group relative
                grid gap-8
                md:grid-cols-12
                items-center
              "
            >
              {/* Hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute -inset-4
                  rounded-2xl
                  opacity-0
                  border
                  border-white/10
                  transition
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(56,189,248,0.15), transparent 60%)",
                }}
              />

              {/* Text content */}
              <div
                className={[
                  "relative z-10 space-y-4",
                  idx % 2 === 0
                    ? "md:col-span-6 md:col-start-1"
                    : "md:col-span-6 md:col-start-7 md:text-right",
                ].join(" ")}
              >
                <h3 className="text-xl font-semibold">
                  <a
                    href={project.link}
                    className="hover:underline text-[color:var(--text-main)]"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {project.description}
                </p>

                {/* Tech stack */}
                <ul
                  className={[
                    "flex flex-wrap gap-2",
                    idx % 2 !== 0 ? "md:justify-end" : "",
                  ].join(" ")}
                >
                  {project.tech.map((tech) => (
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

              {/* Image */}
              <div
                className={[
                  "relative z-10",
                  "md:col-span-6",
                  idx % 2 === 0 ? "md:col-start-7" : "md:col-start-1",
                ].join(" ")}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
