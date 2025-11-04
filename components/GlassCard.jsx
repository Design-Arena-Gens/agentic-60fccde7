export default function GlassCard({ title, desc, emoji }) {
  return (
    <article className="glass card">
      <div style={{ fontSize: '1.4rem', lineHeight: 1.2 }}>
        <span style={{ fontSize: '1.5rem', marginRight: '0.35rem' }}>{emoji}</span>
        <strong>{title}</strong>
      </div>
      <p>{desc}</p>
    </article>
  );
}
