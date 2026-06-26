import { motion } from 'framer-motion';
import { Star, Users, BookOpen, Wrench } from 'lucide-react';

const stats = [
  { label: 'GitHub Stars', value: '42K+', icon: Star },
  { label: 'Data Engineers', value: '10K+', icon: Users },
  { label: 'Resources', value: '500+', icon: BookOpen },
  { label: 'Tools Covered', value: '50+', icon: Wrench },
];

export function StatsBar() {
  return (
    <section className="py-16 border-y border-border bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="p-3 rounded-xl bg-background border border-border shadow-sm text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-foreground tracking-tight">{stat.value}</h3>
                <p className="text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}