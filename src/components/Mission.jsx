export default function Mission() {
  return (
    <section id="secao_missao" className="py-5 bg-white rounded-4 shadow-sm">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2>Nossa Missão</h2>
            <p className="text-secondary">Nossa missão principal é oferecer uma ferramenta prática que permite:</p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">Comparar preços entre estabelecimentos.</li>
              <li className="list-group-item">Economizar tempo e dinheiro.</li>
              <li className="list-group-item">Tomar decisões de compra mais inteligentes.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="/duvida_preco.png" className="img-fluid rounded-4 shadow-sm" loading="lazy" alt="Consumidor com dúvida sobre o que vai levar por conta do preço" />
          </div>
        </div>
      </div>
    </section>
  );
}