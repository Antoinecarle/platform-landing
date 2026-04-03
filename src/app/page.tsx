const agents = [
  {
    title: 'Agent météo',
    description: 'Un agent IA qui donne la météo du jour, les prévisions et les alertes utiles en un instant.'
  },
  {
    title: 'Agent ménage',
    description: 'Trouvez rapidement des femmes de ménage disponibles selon votre ville, vos horaires et votre budget.'
  },
  {
    title: 'Agent bourse',
    description: 'Suivez les prix en bourse, les tendances du marché et les variations importantes en temps réel.'
  }
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">AgentHub • plateforme d’agents IA</span>
          <h1>Des agents IA utiles, simples et rapides.</h1>
          <p className="lead">
            AgentHub réunit des agents intelligents pour t’aider au quotidien : météo, recherche de femmes de ménage et suivi des prix en bourse.
          </p>
          <div className="actions">
            <a className="btn primary" href="#agents">Découvrir les agents</a>
            <a className="btn secondary" href="mailto:hello@agenthub.com">Nous contacter</a>
          </div>
        </div>
      </section>

      <section className="container" id="agents">
        <div className="grid">
          {agents.map((agent) => (
            <article className="card" key={agent.title}>
              <h2>{agent.title}</h2>
              <p>{agent.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="footer">AgentHub — une landing page propre, claire et prête à évoluer.</div>
    </main>
  );
}