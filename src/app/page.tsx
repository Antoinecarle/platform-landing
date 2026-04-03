const agents = [
  {
    title: 'Météo instantanée',
    description: 'Un agent qui donne la météo du jour, les prévisions et les alertes utiles en quelques secondes.'
  },
  {
    title: 'Trouver une femme de ménage',
    description: 'Un agent qui aide à identifier rapidement des prestataires de confiance selon la ville et le besoin.'
  },
  {
    title: 'Prix en bourse',
    description: 'Un agent qui résume les cours, les variations et les tendances des marchés financiers.'
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="badge">AgentHub · plateforme d’agents IA</div>
        <h1>Des agents IA utiles, prêts à agir.</h1>
        <p className="lead">
          AgentHub rassemble des agents spécialisés pour gagner du temps au quotidien : météo,
          recherche de services à domicile et suivi des prix en bourse.
        </p>
      </section>

      <section className="grid" aria-label="Agents IA">
        {agents.map((agent) => (
          <article className="card" key={agent.title}>
            <h3>{agent.title}</h3>
            <p>{agent.description}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <h2 style={{ marginTop: 0 }}>Pourquoi AgentHub ?</h2>
        <p className="lead" style={{ marginTop: 12 }}>
          Une base simple, claire et évolutive pour ajouter de nouveaux agents IA au fur et à mesure.
        </p>
      </section>

      <div className="footer">AgentHub — landing page reconstruite et prête à être déployée.</div>
    </main>
  );
}
