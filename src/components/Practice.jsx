export default function Practice() {
  return (
    <section id="secao_pratica" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2>Na prática</h2>
            <p className="text-secondary">Os consumidores perdem tempo e dinheiro diariamente.</p>
            <div className="mb-4">
              <h3>O Problema:</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Variação extrema de preços entre supermercados.</li>
                <li className="list-group-item">Dificuldade em encontrar as melhores ofertas.</li>
                <li className="list-group-item">Falta de planejamento gera gastos excessivos.</li>
                <li className="list-group-item">Encartes físicos são difíceis de acompanhar.</li>
              </ul>
            </div>
            <div className="card shadow-sm border-warning">
              <div className="card-body">
                <h3>A Solução</h3>
                <p className="card-text text-secondary">
                  O Pratizen não é apenas uma lista de compras, é uma ferramenta de inteligência de consumo.
                  Nossa promessa é comparar preços, economizar tempo e otimizar cada centavo gasto:
                  Simples; Rápido; Econômico.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/foto_com_app.png"
              loading="lazy"
              className="img-fluid rounded-4 shadow-sm"
              alt="Consumidores usando o Pratizen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}