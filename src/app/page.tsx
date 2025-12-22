import LeftPanel from "@/app/components/LeftPanel";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Articles from "@/app/components/Articles";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:py-12">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left sticky column */}
        <LeftPanel />

        {/* Right scrollable content */}
        <div className="space-y-32">
          <section id="hero">
            <Hero />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="articles">
            <Articles />
          </section>
        </div>
      </div>
    </main>
  );
}
