export default function Features() {
  const cards = [
    { title: "Comparação de Preços", text: "Análise de preços de produtos em diferentes supermercados e identificação das melhores ofertas." },
    { title: "Listas Inteligentes", text: "Listas de compras personalizadas com sugestões automáticas de economia e sincronização." },
    { title: "Geolocalização Avançada", text: "Localização de lojas próximas a você e rotas otimizadas para os estabelecimentos." },
    { title: "Encartes Digitais", text: "Acesso a encartes digitais atualizados dos seus supermercados favoritos." }
  ];

  return (
    <section id="secao_funcionalidades" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Funcionalidades Principais</h2>
          <p className="text-secondary">Recursos criados para ajudar você a economizar e planejar melhor as compras.</p>
        </div>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 shadow-sm border-warning">
                <div className="card-body">
                  <h3 className="h5">{card.title}</h3>
                  <p className="card-text text-secondary">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h3>Algumas imagens do App</h3>
          <div className="row g-3 mt-3">
            <div className="col-12 col-md-4">
              <img src="/1.png" className="img-fluid rounded shadow-sm" loading="lazy" alt="Splash Screen" />
            </div>
            <div className="col-12 col-md-4">
              <img src="/2.png" className="img-fluid rounded shadow-sm" loading="lazy" alt="Tela de Login" />
            </div>
            <div className="col-12 col-md-4">
              <img src="/3.png" className="img-fluid rounded shadow-sm" loading="lazy" alt="Tela de Produtos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}