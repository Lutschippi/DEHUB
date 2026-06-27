import { motion } from 'framer-motion';

const COMMUNITIES = [
  {
    name: 'Data Engineering Weekly',
    desc: 'Community around the newsletter',
    tag: 'Newsletter',
  },
  {
    name: 'Seattle Data Guy',
    desc: 'Discord community & consulting content',
    tag: 'Discord',
  },
  {
    name: 'DataExpert.io',
    desc: 'The most active community for aspiring data engineers',
    tag: 'Discord + Courses',
  },
  {
    name: 'Data Talks Club',
    desc: 'Free courses, study groups, and Slack community',
    tag: 'Slack',
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

export function StatsBar() {
  return (
    <section id="community" style={{ padding: '80px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#4a7a5a', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          03 / COMMUNITY
        </span>
      </div>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#d4ede0', marginBottom: '36px', letterSpacing: '-0.02em' }}>
        Join the Conversation
      </motion.h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
        {COMMUNITIES.map((c) => (
          <motion.div key={c.name} variants={item}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              padding: '20px',
              transition: 'border-color 0.2s',
            }}
            whileHover={{ borderColor: 'rgba(34,197,94,0.25)' }}>
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#4a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{c.tag}</div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#d4ede0', marginBottom: '6px' }}>{c.name}</h3>
            <p style={{ fontSize: '12px', color: '#6e9e82', lineHeight: 1.6 }}>{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
