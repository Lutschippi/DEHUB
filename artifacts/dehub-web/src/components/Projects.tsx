import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: 'Bitcoin Price Analytics',
    diff: 'Beginner',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.18)',
    desc: 'Ingest and visualize live BTC price data. Build a simple pipeline with Python, store in Postgres, and plot trends.',
  },
  {
    name: 'Stock Market Analytics',
    diff: 'Intermediate',
    color: '#facc15',
    bg: 'rgba(250,204,21,0.07)',
    border: 'rgba(250,204,21,0.18)',
    desc: 'Pull daily OHLCV data, calculate moving averages with dbt, orchestrate with Airflow, and serve via API.',
  },
  {
    name: 'Airbnb Data Lakehouse',
    diff: 'Intermediate',
    color: '#facc15',
    bg: 'rgba(250,204,21,0.07)',
    border: 'rgba(250,204,21,0.18)',
    desc: 'Build a full lakehouse on the NYC Airbnb dataset. Iceberg tables, Spark transforms, and a dbt semantic layer.',
  },
  {
    name: 'YouTube Channel Analytics',
    diff: 'Advanced',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.07)',
    border: 'rgba(248,113,113,0.18)',
    desc: 'Stream YouTube API events with Kafka, process with Flink, and build a real-time dashboard.',
  },
  {
    name: 'Twitch Chat Analytics',
    diff: 'Advanced',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.07)',
    border: 'rgba(248,113,113,0.18)',
    desc: 'Real-time chat ingestion via Twitch EventSub, sentiment analysis, and per-stream dashboards.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#4a7a5a', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          06 / PROJECTS
        </span>
      </div>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#d4ede0', marginBottom: '36px', letterSpacing: '-0.02em' }}>
        Hands-On Projects
      </motion.h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
        {PROJECTS.map((p) => (
          <motion.div key={p.name} variants={item}
            style={{
              background: p.bg, border: `1px solid ${p.border}`,
              borderRadius: '10px', padding: '22px',
              transition: 'transform 0.15s',
            }}
            whileHover={{ scale: 1.02 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#d4ede0', lineHeight: 1.4 }}>{p.name}</h3>
              <span style={{
                fontSize: '10px', fontFamily: 'monospace', fontWeight: 700,
                color: p.color, background: 'rgba(0,0,0,0.2)',
                padding: '2px 8px', borderRadius: '4px', flexShrink: 0, marginLeft: '8px',
              }}>{p.diff}</span>
            </div>
            <p style={{ fontSize: '12px', color: '#8fad9a', lineHeight: 1.65 }}>{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
