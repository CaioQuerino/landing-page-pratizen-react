export default function AgeCheck({ onVerify }) {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: 520 }}>
          <div className="card-body text-center">
            <h1 className="card-title mb-4">É maior de idade?</h1>
            <p className="text-secondary mb-4">
              Para continuar, confirme se você tem 18 anos ou mais.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn btn-warning btn-lg" onClick={() => onVerify(true)}>
                Sim
              </button>
              <button className="btn btn-outline-secondary btn-lg" onClick={() => onVerify(false)}>
                Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}