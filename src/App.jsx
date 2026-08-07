import { useState } from 'react';
import AgeCheck from './pages/AgeCheck';
import HavePermission from './pages/HavePermission';
import './App.css';

function App() {
  const [isAdult, setIsAdult] = useState(null);

  if (isAdult === null) {
    return <AgeCheck onVerify={setIsAdult} />;
  }

  if (isAdult === false) {
    return (
      <div className="container py-5">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: 520 }}>
          <div className="card-body text-center">
            <h1 className="card-title mb-3">Acesso Negado</h1>
            <p className="text-secondary mb-4">
              Desculpe, você precisa ser maior de idade para acessar o Pratizen.
            </p>
            <button className="btn btn-warning btn-lg" onClick={() => setIsAdult(null)}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <HavePermission />;
}

export default App;