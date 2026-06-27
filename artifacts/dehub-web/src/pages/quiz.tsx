import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';

const QUESTIONS = [
  {
    q: 'What does CDC stand for in data engineering?',
    opts: ['Change Data Capture', 'Columnar Data Compression', 'Cloud Data Connector', 'Continuous Data Computation'],
    answer: 0,
  },
  {
    q: 'Which open table format was originally developed by Netflix for Iceberg?',
    opts: ['Delta Lake', 'Apache Hudi', 'Apache Iceberg', 'Apache ORC'],
    answer: 2,
  },
  {
    q: 'In Airflow, what is a DAG?',
    opts: ['Data Aggregation Graph', 'Directed Acyclic Graph', 'Data Analysis Gateway', 'Dynamic Async Group'],
    answer: 1,
  },
  {
    q: 'What does dbt primarily help with in the data stack?',
    opts: ['Data ingestion', 'Streaming processing', 'Data transformation in the warehouse', 'Schema migration'],
    answer: 2,
  },
  {
    q: 'Which messaging system is designed for high-throughput, fault-tolerant event streaming?',
    opts: ['RabbitMQ', 'Apache Kafka', 'Redis Pub/Sub', 'AWS SQS'],
    answer: 1,
  },
  {
    q: 'What is the "medallion architecture" in a data lakehouse?',
    opts: ['A partitioning strategy', 'Bronze/Silver/Gold tiered data quality layers', 'A caching layer pattern', 'A Spark execution model'],
    answer: 1,
  },
  {
    q: 'Which SQL clause is used to deduplicate streaming records using event time?',
    opts: ['QUALIFY', 'WINDOW', 'PARTITION BY with ROW_NUMBER()', 'DISTINCT ON'],
    answer: 2,
  },
  {
    q: 'What does SCD stand for in data warehousing?',
    opts: ['Structured Column Definition', 'Slowly Changing Dimension', 'Schema Change Detection', 'Stream Compute Distribution'],
    answer: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === QUESTIONS[current].answer) setScore(s => s + 1);
  }

  function handleNext() {
    if (current + 1 >= QUESTIONS.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  const q = QUESTIONS[current];

  return (
    <div style={{ minHeight: '100vh', background: '#071810', color: '#f0f6f3', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />

      <main style={{ maxWidth: '680px', margin: '0 auto', padding: '100px 24px 80px' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#4a7a5a', textDecoration: 'none', fontSize: '13px', marginBottom: '36px', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color='#22c55e')}
          onMouseLeave={e => (e.currentTarget.style.color='#4a7a5a')}>
          ← Back to Handbook
        </Link>

        {!finished ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: '#d4ede0' }}>
                🧠 DE Knowledge Quiz
              </h1>
              <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#4a7a5a' }}>
                {current + 1} / {QUESTIONS.length}
              </span>
            </div>

            <div style={{
              width: '100%', height: '3px', background: 'rgba(255,255,255,0.07)',
              borderRadius: '2px', marginBottom: '36px',
            }}>
              <div style={{
                height: '100%', borderRadius: '2px', background: '#22c55e',
                width: `${((current + 1) / QUESTIONS.length) * 100}%`,
                transition: 'width 0.3s',
              }} />
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px', padding: '28px', marginBottom: '20px',
            }}>
              <p style={{ fontSize: '17px', fontWeight: 600, color: '#d4ede0', lineHeight: 1.5 }}>{q.q}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {q.opts.map((opt, idx) => {
                let bg = 'rgba(255,255,255,0.03)';
                let border = '1px solid rgba(255,255,255,0.07)';
                let color = '#d4ede0';
                if (selected !== null) {
                  if (idx === q.answer) { bg = 'rgba(34,197,94,0.12)'; border = '1px solid rgba(34,197,94,0.4)'; color = '#22c55e'; }
                  else if (idx === selected) { bg = 'rgba(248,113,113,0.1)'; border = '1px solid rgba(248,113,113,0.3)'; color = '#f87171'; }
                }
                return (
                  <button key={idx} onClick={() => handleSelect(idx)} style={{
                    background: bg, border, borderRadius: '8px',
                    padding: '14px 18px', textAlign: 'left', color,
                    fontSize: '14px', cursor: selected !== null ? 'default' : 'pointer',
                    transition: 'background 0.18s, border-color 0.18s, color 0.18s',
                    fontFamily: 'inherit',
                  }}>
                    <span style={{ fontFamily: 'monospace', color: selected === null ? '#4a7a5a' : 'inherit', marginRight: '10px', fontSize: '12px' }}>
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <button onClick={handleNext} style={{
                background: '#22c55e', color: '#071810',
                border: 'none', borderRadius: '8px',
                padding: '12px 28px', fontSize: '14px', fontWeight: 700,
                cursor: 'pointer', transition: 'opacity 0.15s', fontFamily: 'inherit',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity='0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity='1')}>
                {current + 1 >= QUESTIONS.length ? 'See Results' : 'Next Question →'}
              </button>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '40px' }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>
              {score >= 7 ? '🏆' : score >= 5 ? '🎯' : '📚'}
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#d4ede0', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              {score} / {QUESTIONS.length} correct
            </h2>
            <p style={{ color: '#6e9e82', fontSize: '14px', marginBottom: '36px', lineHeight: 1.6 }}>
              {score >= 7 ? 'Excellent! You know your DE fundamentals well.' : score >= 5 ? 'Good start — keep exploring the handbook.' : 'No worries — everyone starts somewhere. Read through the handbook!'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={restart} style={{
                background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                color: '#22c55e', borderRadius: '8px', padding: '11px 24px',
                fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Try Again
              </button>
              <Link href="/" style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#d4ede0', borderRadius: '8px', padding: '11px 24px',
                fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block',
              }}>
                Back to Handbook
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
