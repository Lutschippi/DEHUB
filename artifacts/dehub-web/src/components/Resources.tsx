import { motion } from 'framer-motion';

const INTERVIEW_TOPICS = [
  { value: 'sql', title: 'SQL & Analytics', body: 'LeetCode Database problems and Mode Analytics SQL Tutorial.' },
  { value: 'design', title: 'System Design', body: 'Architect data lakehouses, streaming pipelines, and batch systems at scale.' },
  { value: 'modeling', title: 'Data Modeling', body: 'Tradeoffs between dimensional modeling (Kimball), Data Vault, and OBT. Know SCDs and when to denormalize.' },
  { value: 'coding', title: 'Python & Coding', body: 'Data structures, algorithmic thinking, and writing clean, testable pipeline code.' },
];

const QUALITY_TOOLS = ['Great Expectations', 'Monte Carlo', 'Soda', 'Datafold'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Resources() {
  return (
    <>
      <section id="resources" style={{ padding: '80px 24px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '14px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#4a7a5a', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
            04 / INTERVIEW
          </span>
        </div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#d4ede0', marginBottom: '10px', letterSpacing: '-0.02em' }}>
          Interview Resources
        </motion.h2>
        <p style={{ fontSize: '13px', color: '#6e9e82', marginBottom: '36px', maxWidth: '560px', lineHeight: 1.65 }}>
          Everything you need to land a data engineering role — structured by topic so you can focus on your gaps.
        </p>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {INTERVIEW_TOPICS.map((t) => (
            <motion.div key={t.value} variants={item}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '10px', padding: '20px',
                transition: 'border-color 0.2s',
              }}
              whileHover={{ borderColor: 'rgba(34,197,94,0.25)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#d4ede0', marginBottom: '8px' }}>{t.title}</h3>
              <p style={{ fontSize: '12px', color: '#6e9e82', lineHeight: 1.65 }}>{t.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '0 24px 80px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '60px' }}>
          <div style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#4a7a5a', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
              05 / QUALITY
            </span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#d4ede0', marginBottom: '10px', letterSpacing: '-0.02em' }}>
            Data Cleaning & Quality
          </motion.h2>
          <p style={{ fontSize: '13px', color: '#6e9e82', marginBottom: '28px', maxWidth: '540px', lineHeight: 1.65 }}>
            Garbage in, garbage out. Learn validation frameworks and observability tools to build trustworthy data products.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUALITY_TOOLS.map(tool => (
              <span key={tool} style={{
                padding: '5px 12px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#8fad9a',
                fontFamily: 'monospace',
              }}>{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
