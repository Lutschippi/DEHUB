import { motion } from 'framer-motion';
import { Star, GitFork, Github } from 'lucide-react';

const projects = [
  { name: 'apache/spark', desc: 'Unified engine for large-scale data analytics.', stars: '39.2k', forks: '28.1k', lang: 'Scala' },
  { name: 'apache/airflow', desc: 'Platform to programmatically author, schedule, and monitor workflows.', stars: '35.1k', forks: '13.5k', lang: 'Python' },
  { name: 'dbt-labs/dbt-core', desc: 'Enable data analysts and engineers to transform their data using SQL.', stars: '8.9k', forks: '2.1k', lang: 'Python' },
  { name: 'apache/iceberg', desc: 'Open table format for huge analytic datasets.', stars: '5.8k', forks: '2.4k', lang: 'Java' },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 border-y border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Open Source <span className="text-primary">Showcase</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              The tools powering the world's data infrastructure are built in the open. Explore, contribute, and learn from the best.
            </motion.p>
          </div>
          <motion.a 
            href="https://github.com/Lutschippi/DEHUB"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:bg-accent hover:border-primary/50 transition-all font-mono text-sm shadow-sm whitespace-nowrap"
          >
            <Github size={18} /> View all on GitHub
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-8 rounded-2xl border border-border bg-card flex flex-col hover:border-muted-foreground/30 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold font-mono text-primary group-hover:underline underline-offset-4 decoration-primary/50">{p.name}</h3>
                <span className="px-3 py-1 rounded text-xs font-mono bg-background border border-border text-muted-foreground shadow-sm">{p.lang}</span>
              </div>
              <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">{p.desc}</p>
              <div className="flex gap-6 text-sm font-mono text-muted-foreground bg-background/50 px-4 py-3 rounded-lg border border-border/50">
                <span className="flex items-center gap-2 hover:text-foreground transition-colors"><Star size={16} className="text-yellow-500/80" /> {p.stars}</span>
                <span className="flex items-center gap-2 hover:text-foreground transition-colors"><GitFork size={16} className="text-blue-500/80" /> {p.forks}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}