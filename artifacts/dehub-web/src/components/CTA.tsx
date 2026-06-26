import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-card/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Join the <span className="text-primary font-mono">Terminal</span></h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Get weekly deep dives into data engineering architecture, tools, and career growth directly to your inbox.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="email" 
                placeholder="root@localhost:~" 
                className="w-full bg-background/50 border border-border rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mono text-base transition-all"
              />
            </div>
            <button className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group whitespace-nowrap shadow-[0_0_20px_rgba(0,255,136,0.2)]">
              Subscribe <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-sm text-muted-foreground mt-6 font-mono">No spam. Unsubscribe anytime with <span className="text-primary">Ctrl+C</span>.</p>
        </motion.div>
      </div>
    </section>
  );
}