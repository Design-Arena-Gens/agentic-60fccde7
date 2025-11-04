'use client';
import './globals.css';
import Navbar from '../components/Navbar';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="site-bg">
      <Navbar />

      <section className="container hero">
        <div className="hero-content glass"> 
          <h1>Elegant Glassmorphism</h1>
          <p>
            Crisp, modern UI with translucent surfaces and soft blur effects.
            Fully responsive and ready to deploy.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#features">Explore Features</a>
            <a className="btn" href="#contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="features" className="container section">
        <h2 className="section-title">Features</h2>
        <div className="grid">
          <GlassCard title="Performance" emoji="?" desc="Optimized Next.js app with best practices." />
          <GlassCard title="Responsive" emoji="??" desc="Works beautifully on every screen size." />
          <GlassCard title="Aesthetic" emoji="?" desc="Soft gradients and frosted glass visuals." />
          <GlassCard title="Accessible" emoji="?" desc="Semantic HTML and good contrast choices." />
          <GlassCard title="Deployable" emoji="??" desc="One command production deploy to Vercel." />
          <GlassCard title="Maintainable" emoji="??" desc="Clean components and simple styles." />
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Testimonials</h2>
        <div className="grid">
          <GlassCard title="Alex" emoji="??" desc="The glass UI looks incredible on our site!" />
          <GlassCard title="Sam" emoji="??" desc="Beautiful gradients and smooth performance." />
          <GlassCard title="Riley" emoji="??" desc="Setup was fast and the code is clear." />
        </div>
      </section>

      <section id="contact" className="container section">
        <h2 className="section-title">Get in touch</h2>
        <form className="glass form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
          </div>
          <textarea rows="5" placeholder="Message" required></textarea>
          <div className="form-actions">
            <button className="btn primary" type="submit">Send</button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}
