import { motion } from 'framer-motion';
import { Database, Zap, Layers, Server, ShieldCheck } from 'lucide-react';

const categories = [
  {
    title: 'Orchestration',
    icon: Layers,
    description: 'Schedule and monitor complex distributed workflows reliably.',
    tools: ['Airflow', 'Dagster', 'Prefect', 'Mage']
  },
  {
    title: 'Storage',
    icon: Database,
    description: 'Open table formats for modern data lakehouses.',
    tools: ['Apache Iceberg', 'Delta Lake', 'Apache Hudi']
  },
  {
    title: 'Processing',
    icon: Zap,
    description: 'Batch and stream massive-scale data transformations.',
    tools: ['Spark', 'Flink', 'dbt']
  },
  {
    title: 'Warehouses',
    icon: Server,
    description: 'Scalable analytical databases for massive workloads.',
    tools: ['Snowflake', 'BigQuery', 'Databricks']
  },
  {
    title: 'Quality & Testing',
    icon: ShieldCheck,
    description: 'Data validation, profiling, and observability.',
    tools: ['Great Expectations', 'dbt tests', 'Soda']
  }
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Modern Data Stack <span className="text-secondary">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Navigate the complex landscape of data engineering tools. We cover the battle-tested industry standards and the next-generation challengers.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-background border border-border text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{cat.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool, j) => (
                      <span key={j} className="px-3 py-1 rounded-md bg-background border border-border text-foreground text-xs font-mono group-hover:border-primary/30 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}