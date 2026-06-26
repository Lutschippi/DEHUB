import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Network } from 'lucide-react';

const paths = [
  {
    level: "Beginner",
    title: "SQL & Python Fundamentals",
    icon: Terminal,
    topics: ["Advanced SQL", "Python for Data", "Linux & Git", "Data Modeling Basics"],
    color: "from-blue-500 to-cyan-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    level: "Intermediate",
    title: "Warehouses & Pipelines",
    icon: Database,
    topics: ["dbt & Transformation", "Airflow Orchestration", "Cloud DWs (Snowflake)", "Batch Processing"],
    color: "from-primary to-green-400",
    badgeColor: "bg-primary/10 text-primary border-primary/20"
  },
  {
    level: "Advanced",
    title: "Distributed Systems",
    icon: Cloud,
    topics: ["Apache Spark", "Data Lakes (Iceberg)", "Streaming (Kafka/Flink)", "Docker & K8s"],
    color: "from-purple-500 to-pink-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    level: "Expert",
    title: "Architecture & Scale",
    icon: Network,
    topics: ["System Design", "FinOps & Cost Tuning", "Data Mesh / Fabric", "Custom Connectors"],
    color: "from-orange-500 to-red-400",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative border-t border-border bg-card/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Engineering <span className="text-primary">Roadmap</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Follow a structured learning path from writing your first SELECT statement to designing globally distributed streaming platforms.
          </motion.p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.25rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl border bg-background shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${path.badgeColor}`}>
                  <Icon size={20} />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-2xl border border-border bg-card shadow-sm hover:border-muted-foreground/30 transition-colors relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${path.color}`}></div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border ${path.badgeColor}`}>
                      Phase {i + 1}: {path.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">{path.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {path.topics.map((topic, j) => (
                      <li key={j} className="flex items-center text-muted-foreground text-sm bg-background/50 px-3 py-2 rounded-md border border-border/50">
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${path.color}`}></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}