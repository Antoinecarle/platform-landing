const agents = [
  {
    title: 'Météo en temps réel',
    description: 'Un agent qui donne la météo, les alertes et les prévisions pour planifier la journée.',
    accent: 'from-sky-400 to-cyan-300',
  },
  {
    title: 'Trouver des femmes de ménage',
    description: 'Un agent qui aide à trouver rapidement des professionnelles disponibles près de chez vous.',
    accent: 'from-fuchsia-400 to-pink-300',
  },
  {
    title: 'Prix en bourse',
    description: 'Un agent qui suit les cours, les variations et les tendances des marchés financiers.',
    accent: 'from-emerald-400 to-lime-300',
  },
];

export default function Home() {
  return (
    <main>
      <section className="container" style={{ padding: '32px 0 96px' }}>
        <div
          className="card"
          style={{
            borderRadius: 32,
            padding: 24,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 24,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <div style={{ color: '#7dd3fc', fontWeight: 700, letterSpacing: '0.12em', fontSize: 12 }}>
              AGENTHUB
            </div>
            <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02, margin: '14px 0 16px' }}>
              Une landing page pour lancer vos agents IA.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#b6c6dd', margin: 0 }}>
              AgentHub présente trois agents utiles dès le premier écran : météo, femmes de ménage et prix en bourse.
            </p>
          </div>
          <div
            style={{
              minWidth: 260,
              borderRadius: 24,
              padding: 20,
              background: 'linear-gradient(180deg, rgba(59,130,246,0.18), rgba(15,23,42,0.8))',
              border: '1px solid rgba(125, 211, 252, 0.22)',
            }}
          >
            <div style={{ fontSize: 14, color: '#93c5fd', marginBottom: 8 }}>Plateforme active</div>
            <div style={{ fontSize: 32, fontWeight: 800 }}>3 agents IA</div>
            <div style={{ color: '#b6c6dd', marginTop: 8, lineHeight: 1.6 }}>
              Prête à être enrichie avec de nouveaux agents et une base de données.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          {agents.map((agent) => (
            <article key={agent.title} className="card" style={{ borderRadius: 24, padding: 22 }}>
              <div
                style={{
                  height: 8,
                  width: 84,
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${agent.accent.replace('from-', '').replace(' to-', ', ')})`,
                }}
              />
              <h2 style={{ margin: '18px 0 10px', fontSize: 24 }}>{agent.title}</h2>
              <p style={{ margin: 0, color: '#b6c6dd', lineHeight: 1.7 }}>{agent.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
