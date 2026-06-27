import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';

const NAV_LINKS = [
  { label: 'Start', href: '#paths' },
  { label: 'Books', href: '#books' },
  { label: 'Community', href: '#community' },
  { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: '52px', display: 'flex', alignItems: 'center',
      padding: '0 24px',
      background: scrolled ? 'rgba(7,24,16,0.97)' : 'rgba(7,24,16,0.75)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      transition: 'background 0.2s',
      gap: '0',
    }}>
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:'8px', textDecoration:'none', marginRight:'28px', flexShrink:0 }}>
        <LogoIcon />
        <span style={{ fontWeight:600, fontSize:'15px', color:'#d4ede0', letterSpacing:'-0.01em' }}>DE Hub</span>
      </Link>

      <div style={{ display:'flex', alignItems:'center', gap:'2px', flex:1 }}>
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} style={{
            color:'#6e9e82', textDecoration:'none', fontSize:'14px', fontWeight:500,
            padding:'6px 11px', borderRadius:'6px', transition:'color 0.15s, background 0.15s',
          }}
          onMouseEnter={e => { const el = e.target as HTMLAnchorElement; el.style.color='#d4ede0'; el.style.background='rgba(255,255,255,0.06)'; }}
          onMouseLeave={e => { const el = e.target as HTMLAnchorElement; el.style.color='#6e9e82'; el.style.background='transparent'; }}>
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ position:'relative', display:'flex', alignItems:'center' }}>
        <svg style={{ position:'absolute', left:'9px', color:'#3d7057', pointerEvents:'none', flexShrink:0 }}
          width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input ref={inputRef} type="text" placeholder="Search resources..." value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
            borderRadius:'6px', color:'#d4ede0', fontSize:'13px',
            padding:'5px 10px 5px 28px', width:'190px', outline:'none',
            transition:'border-color 0.15s, width 0.2s', fontFamily:'inherit',
          }}
          onFocus={e => { e.target.style.borderColor='rgba(34,197,94,0.45)'; e.target.style.width='230px'; }}
          onBlur={e => { e.target.style.borderColor='rgba(255,255,255,0.08)'; e.target.style.width='190px'; }}
        />
      </div>
    </nav>
  );
}

function LogoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect width="26" height="26" rx="6" fill="rgba(34,197,94,0.14)"/>
      <rect x="5" y="8"  width="6" height="1.8" rx="0.9" fill="#22c55e"/>
      <rect x="5" y="12" width="9" height="1.8" rx="0.9" fill="#22c55e"/>
      <rect x="5" y="16" width="7" height="1.8" rx="0.9" fill="#22c55e"/>
      <rect x="16" y="8"  width="5" height="1.8" rx="0.9" fill="#22c55e" opacity="0.5"/>
      <rect x="16" y="12" width="5" height="1.8" rx="0.9" fill="#22c55e" opacity="0.5"/>
      <rect x="16" y="16" width="5" height="1.8" rx="0.9" fill="#22c55e" opacity="0.5"/>
    </svg>
  );
}
