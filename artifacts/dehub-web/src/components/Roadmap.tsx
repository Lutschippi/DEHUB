import { motion } from 'framer-motion';

const PATHS = [
  {
    label: 'Beginner Track',
    desc: 'Master SQL, Python, and Git. Understand databases, basic data modeling, and how to query and transform data. Build your first pipeline.',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.2)',
    icon: '▸_',
  },
  {
    label: 'Intermediate Track',
    desc: 'Dive into distributed computing (Spark), orchestration (Airflow), cloud data warehouses, and the modern data stack with dbt.',
    color: '#facc15',
    bg: 'rgba(250,204,21,0.08)',
    border: 'rgba(250,204,21,0.2)',
    icon: '▸▸',
  },
  {
    label: 'Advanced Self-Study',
    desc: 'Streaming (Kafka/Flink), data modeling at scale, open table formats (Iceberg/Delta), system design, and building production-grade lakehouses.',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.08)',
    border: 'rgba(248,113,113,0.2)',
    icon: '▸▸▸',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Roadmap() {
  return (
    <section id="paths" style={{ padding: '80px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#4a7a5a', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          01 / PATHS
        </span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#d4ede0', marginBottom: '36px', letterSpacing: '-0.02em' }}>
        Getting Started
      </motion.h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        {PATHS.map((p) => (
          <motion.div key={p.label} variants={item}
            style={{
              background: p.bg,
              border: `1px solid ${p.border}`,
              borderRadius: '10px',
              padding: '24px',
              cursor: 'default',
              transition: 'border-color 0.2s',
            }}
            whileHover={{ scale: 1.02 }}>
            <div style={{ fontFamily: 'monospace', fontSize: '13px', color: p.color, marginBottom: '10px', fontWeight: 600 }}>
              {p.icon}
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#d4ede0', marginBottom: '10px' }}>{p.label}</h3>
            <p style={{ fontSize: '13px', color: '#6e9e82', lineHeight: 1.65 }}>{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
