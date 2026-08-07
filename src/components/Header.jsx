export default function Header() {
  return (
    <header className="sticky-top bg-white shadow-sm">
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <h1 className="h3 mb-0 text-warning">Pratizen</h1>
          <nav>
            <ul className="nav gap-2">
              <li className="nav-item"><a className="nav-link text-dark px-2" href="#secao_missao">Nossa Missão</a></li>
              <li className="nav-item"><a className="nav-link text-dark px-2" href="#secao_pratica">Na prática</a></li>
              <li className="nav-item"><a className="nav-link text-dark px-2" href="#secao_funcionalidades">Funcionalidades</a></li>
              <li className="nav-item"><a className="nav-link text-dark px-2" href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}