export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner glass">
        <div className="brand">
          <span style={{ fontSize: '1.2rem' }}>??</span>
          <span>GlassSite</span>
        </div>
        <nav className="nav-links">
          <a className="btn" href="#features">Features</a>
          <a className="btn" href="#contact">Contact</a>
          <a className="btn primary" href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>
        </nav>
      </div>
    </header>
  );
}
