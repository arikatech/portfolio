"use client";

import { useActiveSection } from "./useActiveSection";

const links = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Articles", id: "articles" },
];

export default function Nav() {
  const activeId = useActiveSection(links.map((l) => l.id));

  return (
    <nav className="mt-8 flex flex-col gap-4">
      {links.map((link) => {
        const isActive = activeId === link.id;

        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="group flex items-center gap-4 text-sm font-medium transition"
          >
            {/* Line indicator */}
            <span
              className={[
                "h-px transition-all duration-300",
                isActive
                  ? "w-16 bg-[color:var(--accent-secondary)]"
                  : "w-8 bg-white/30 group-hover:w-16 group-hover:bg-[color:var(--accent-secondary)]",
              ].join(" ")}
            />

            {/* Label */}
            <span
              className={
                isActive
                  ? "text-[color:var(--text-main)]"
                  : "text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)]"
              }
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
