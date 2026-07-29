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
      <div className="age-container" style={{ margin: '2em auto' }}>
        <h1>Acesso Negado</h1>
        <p style={{ color: 'var(--font_color_secondary)' }}>
          Desculpe, você precisa ser maior de idade para acessar o Pratizen.
        </p>
        <button className="btn-age" onClick={() => setIsAdult(null)} style={{ marginTop: '1em' }}>
          Voltar
        </button>
      </div>
    );
  }

  return <HavePermission />;
}

export default App;