export default function Features() {
  const cards = [
    { title: "Comparação de Preços", text: "Análise de preços de produtos em diferentes supermercados e identificação das melhores ofertas." },
    { title: "Listas Inteligentes", text: "Listas de compras personalizadas com sugestões automáticas de economia e sincronização." },
    { title: "Geolocalização Avançada", text: "Localização de lojas próximas a você e rotas otimizadas para os estabelecimentos." },
    { title: "Encartes Digitais", text: "Acesso a encartes digitais atualizados dos seus supermercados favoritos." }
  ];

  return (
    <section id="secao_funcionalidades">
      <h2>Funcionalidades Principais</h2>
      <div id="conteudo">
        {cards.map((card, index) => (
          <div key={index}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      
      <div id="conteudo_img">
        <h3>Algumas imagens do App</h3>
        <div>
          <img src="public/1.png" loading="lazy" alt="Splash Screen" />
          <img src="public/2.png" loading="lazy" alt="Tela de Login" />
          <img src="public/3.png" loading="lazy" alt="Tela de Produtos" />
        </div>
      </div>
    </section>
  );
}