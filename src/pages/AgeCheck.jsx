export default function AgeCheck({ onVerify }) {
  return (
    <div className="age-container">
      <h1>É maior de idade?</h1>
      <div className="btn-box">
        <button className="btn-age" onClick={() => onVerify(true)}>Sim</button>
        <button className="btn-age" onClick={() => onVerify(false)}>Não</button>
      </div>
    </div>
  );
}