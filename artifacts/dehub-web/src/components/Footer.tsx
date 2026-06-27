export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      background: '#040f0a',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', marginBottom:'24px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
              <rect width="26" height="26" rx="6" fill="rgba(34,197,94,0.14)"/>
              <rect x="5" y="8"  width="6" height="1.8" rx="0.9" fill="#22c55e"/>
              <rect x="5" y="12" width="9" height="1.8" rx="0.9" fill="#22c55e"/>
              <rect x="5" y="16" width="7" height="1.8" rx="0.9" fill="#22c55e"/>
              <rect x="16" y="8"  width="5" height="1.8" rx="0.9" fill="#22c55e" opacity="0.5"/>
              <rect x="16" y="12" width="5" height="1.8" rx="0.9" fill="#22c55e" opacity="0.5"/>
              <rect x="16" y="16" width="5" height="1.8" rx="0.9" fill="#22c55e" opacity="0.5"/>
            </svg>
            <span style={{ fontWeight:600, fontSize:'14px', color:'#d4ede0' }}>DE Hub</span>
          </div>
          <div style={{ display:'flex', gap:'20px' }}>
            <a href="https://github.com/Lutschippi/DEHUB" target="_blank" rel="noopener noreferrer"
              style={{ color:'#6e9e82', textDecoration:'none', fontSize:'13px', display:'flex', alignItems:'center', gap:'5px', transition:'color 0.15s' }}
              onMouseEnter={e=>(e.currentTarget.style.color='#22c55e')}
              onMouseLeave={e=>(e.currentTarget.style.color='#6e9e82')}>
              <GithubIcon size={14}/> GitHub
            </a>
            <a href="/quiz" style={{ color:'#6e9e82', textDecoration:'none', fontSize:'13px', transition:'color 0.15s' }}
              onMouseEnter={e=>(e.currentTarget.style.color='#22c55e')}
              onMouseLeave={e=>(e.currentTarget.style.color='#6e9e82')}>
              🧠 Quiz
            </a>
          </div>
        </div>
        <p style={{ fontSize:'12px', color:'#3d7057' }}>
          © {new Date().getFullYear()} Data Engineering Hub — open source, built for the community.
        </p>
      </div>
    </footer>
  );
}

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}
