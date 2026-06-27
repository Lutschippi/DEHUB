import { motion } from 'framer-motion';

const BOOKS = [
  {
    title: 'Fundamentals of Data Engineering',
    author: 'Joe Reis & Matt Housley',
    desc: 'The definitive modern guide to the data engineering lifecycle.',
    color: '#22c55e',
  },
  {
    title: 'The Data Warehouse Toolkit',
    author: 'Ralph Kimball',
    desc: 'The bible of dimensional modeling and schema design.',
    color: '#60a5fa',
  },
  {
    title: 'Data Pipelines Pocket Reference',
    author: 'James Densmore',
    desc: 'Practical patterns for moving and transforming data.',
    color: '#a78bfa',
  },
  {
    title: '97 Things Every Data Engineer Should Know',
    author: 'Tobias Macey',
    desc: 'Wisdom and best practices from industry practitioners.',
    color: '#fb923c',
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

export function Ecosystem() {
  return (
    <section id="books" style={{ padding: '80px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#4a7a5a', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          02 / BOOKS
        </span>
      </div>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#d4ede0', marginBottom: '36px', letterSpacing: '-0.02em' }}>
        Essential Books
      </motion.h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
        {BOOKS.map((b) => (
          <motion.div key={b.title} variants={item}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              padding: '20px',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            whileHover={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}>
            <div style={{ width: '28px', height: '4px', background: b.color, borderRadius: '2px', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#d4ede0', marginBottom: '6px', lineHeight: 1.4 }}>{b.title}</h3>
            <p style={{ fontSize: '11px', color: '#4a7a5a', fontFamily: 'monospace', marginBottom: '8px' }}>{b.author}</p>
            <p style={{ fontSize: '12px', color: '#6e9e82', lineHeight: 1.6 }}>{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
