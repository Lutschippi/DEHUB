import { Navbar } from '@/components/Navbar';
import { CanvasBackground } from '@/components/CanvasBackground';
import { Roadmap } from '@/components/Roadmap';
import { Ecosystem } from '@/components/Ecosystem';
import { StatsBar } from '@/components/StatsBar';
import { Resources } from '@/components/Resources';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';

const STACK = ['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Flink', 'Iceberg'];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#071810', color: '#f0f6f3', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <CanvasBackground />

        {/* Radial vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 60%, transparent 30%, #071810 85%)',
          pointerEvents: 'none',
        }} />

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
          background: 'linear-gradient(to bottom, transparent, #071810)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 10, maxWidth: '860px',
          margin: '0 auto', padding: '120px 24px 80px', textAlign: 'left',
        }}>
          <Link href="/quiz" style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'rgba(7,24,16,0.85)',
            border: '1px solid rgba(48,54,61,0.9)',
            borderRadius: '999px', padding: '4px 12px 4px 10px',
            color: '#6e9e82', fontSize: '12px', fontWeight: 500,
            textDecoration: 'none', marginBottom: '32px',
            letterSpacing: '0.01em', transition: 'color 0.18s, border-color 0.18s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color='#22c55e'; (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(34,197,94,0.35)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color='#6e9e82'; (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(48,54,61,0.9)'; }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
            Test Your Knowledge
          </Link>

          <h1 style={{
            fontSize: 'clamp(42px, 7vw, 78px)',
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: '-0.04em',
            marginBottom: '20px',
            color: '#e8f5ee',
          }}>
            The Data Engineering<br />
            <span style={{ color: '#22c55e' }}>Handbook</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: '#6e9e82', lineHeight: 1.7,
            maxWidth: '520px', marginBottom: '32px',
          }}>
            Everything you need to become an extraordinary data engineer. A curated, opinionated guide to the modern data ecosystem.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#3d7057', fontFamily: 'monospace', marginRight: '4px' }}>STACK</span>
            {STACK.map(s => (
              <span key={s} style={{
                padding: '2px 8px',
                background: 'rgba(34,197,94,0.07)',
                border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: '4px',
                fontSize: '11px', fontFamily: 'monospace',
                color: '#4a9e6a', fontWeight: 500,
              }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Roadmap />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Ecosystem />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <StatsBar />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Resources />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Projects />
        </div>
      </div>

      <Footer />

      {/* Fixed GitHub badge */}
      <a href="https://github.com/Lutschippi/DEHUB" target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '1.5rem', right: 'calc(1.5rem + 44px + 10px)',
          zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 20px rgba(34,197,94,0.08)',
          transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
          textDecoration: 'none', color: '#fff',
        }}
        onMouseEnter={e => { const el = e.currentTarget; el.style.background='rgba(255,255,255,0.10)'; el.style.boxShadow='0 0 30px rgba(34,197,94,0.18)'; }}
        onMouseLeave={e => { const el = e.currentTarget; el.style.background='rgba(255,255,255,0.05)'; el.style.boxShadow='0 0 20px rgba(34,197,94,0.08)'; }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </a>

      {/* Fixed Quiz badge */}
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50 }}>
        <Link href="/quiz"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '6px 12px 6px 10px',
            background: 'rgba(22,27,34,0.85)',
            border: '1px solid rgba(48,54,61,0.9)',
            borderRadius: '999px', color: '#8b949e',
            fontSize: '11.5px', fontWeight: 500, textDecoration: 'none',
            letterSpacing: '0.01em', transition: 'color 0.18s, border-color 0.18s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color='#58a6ff'; (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(88,166,255,0.4)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color='#8b949e'; (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(48,54,61,0.9)'; }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3fb950', flexShrink: 0 }} />
          🧠 Test Your Data Engineering Knowledge
        </Link>
      </div>
    </div>
  );
}
