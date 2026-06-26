import { Terminal, Github } from 'lucide-react';
import { Link } from 'wouter';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
          <Terminal className="text-primary" />
          <span>DE<span className="text-primary">HUB</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#ecosystem" className="hover:text-foreground transition-colors">Ecosystem</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
          <a href="#resources" className="hover:text-foreground transition-colors">Resources</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/Lutschippi/DEHUB" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="#resources" className="hidden md:flex bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.2)]">
            Join Hub
          </a>
        </div>
      </div>
    </nav>
  );
}