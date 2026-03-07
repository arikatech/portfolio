import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

export default function LeftPanel() {
  return (
    <aside className="relative h-fit lg:sticky lg:top-36 lg:z-20">
      <div
        className="
          flex flex-col gap-6
          pt-10 pb-10
          lg:pt-0 lg:pb-0
        "
      >
        {/* Hero */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-[var(--font-display)] tracking-tight text-[color:var(--text-main)] sm:text-5xl">
              Ariunbolor Tsendsuren
            </h1>

            <p className="text-lg text-[color:var(--text-muted)]">
              Software Developer & ML enthusiast
            </p>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[color:var(--text-muted)]">
            Based in Italy, currently pursuing a bachelor’s degree in Data Analysis at the University of Messina. 
            I build practical software projects across web, backend, and machine learning.
          </p>

          {/* Socials are visible on mobile */}
          <SocialLinks />
        </div>

        {/* Nav: desktop only (Brittany-style) */}
        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>

      {/* Optional divider on mobile for separation */}
      <div className="h-px w-full bg-white/10 lg:hidden" />
    </aside>
  );
}
