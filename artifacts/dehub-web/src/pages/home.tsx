import { Terminal } from "@/components/Terminal";
import { StatsBar } from "@/components/StatsBar";
import { Roadmap } from "@/components/Roadmap";
import { Resources } from "@/components/Resources";
import { Ecosystem } from "@/components/Ecosystem";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Cyberpunk grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]"></div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  DEHUB v2.0 is live
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  The Command Center for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Data Engineers</span>.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  From beginners breaking in to senior architects designing petabyte-scale systems. The ultimate open-source resource hub inspired by DataExpert.io.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#roadmap" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                    Explore Roadmap
                  </a>
                  <a href="https://github.com/Lutschippi/DEHUB" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md border border-border bg-card hover:bg-accent transition-colors flex items-center gap-2 font-mono text-sm">
                    $ git clone dehub
                  </a>
                </div>
              </div>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur-2xl opacity-20 animate-pulse"></div>
                <Terminal />
              </div>
            </div>
          </div>
        </section>
        
        <StatsBar />
        <Ecosystem />
        <Roadmap />
        <Resources />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}