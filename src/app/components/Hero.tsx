import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-6">
      <div className="space-y-6">
        {/* Section label (subtle, Brittany-like) */}
        <p className="text-xs tracking-[0.25em] uppercase text-[color:var(--text-muted)]">
          Welcome
        </p>

        {/* Headline */}
        {/* <h2 className="text-3xl font-[var(--font-display)] tracking-tight text-[color:var(--text-main)] sm:text-4xl">
          Building modern web experiences with a cosmic touch.
        </h2> */}

        {/* Small supporting line (keep it short) */}
        <p className="max-w-xl text-sm leading-relaxed text-[color:var(--text-muted)]">
          I’m Ariunbolor, a Computer Science and Data Analysis student building projects 
          in backend development, web applications, and machine learning.
        </p>

        {/* Big hero art */}
        <div 
        className="relative mt-6 overflow-hidden border border-white/10 rounded-2xl bg-white/5"
        >
          {/* Glow layer */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at 70% 60%, rgba(255,110,199,0.18), transparent 60%)",
            }}
          />

          <div className="relative p-6 sm:p-10">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-3xl">
              <Image
                src="/hero-art.svg"
                alt="Cosmic hero illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
