import {
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/arikatech",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ariunbolor-tsendsuren-a25a78224/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:ariunbolor.tse@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-4">
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              group inline-flex items-center justify-center
              rounded-full
              p-2
              text-[color:var(--text-muted)]
              transition
              hover:text-[color:var(--accent-secondary)]
              hover:bg-white/5
            "
          >
            <Icon
              size={18}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
