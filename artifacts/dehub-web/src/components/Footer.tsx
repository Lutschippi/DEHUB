import { Github, Globe, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 font-mono font-bold text-2xl">
            <Terminal className="text-primary" size={28} />
            <span>DE<span className="text-primary">HUB</span></span>
          </div>
          
          <div className="flex gap-8 text-base text-muted-foreground font-medium">
            <a href="https://github.com/Lutschippi/DEHUB" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github size={20} /> GitHub
            </a>
            <a href="http://dehub.engineer/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Globe size={20} /> Website
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground font-mono flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Data Engineering Hub. Built for the community.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}