export default function Contact() {
  return (
    <section id="contato" className="py-5 bg-white rounded-4 shadow-sm mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2>Contato</h2>
            <p className="text-secondary">Entre em contato conosco para mais informações ou suporte:</p>
            <ul className="list-unstyled">
              <li>
                Email: <a href="mailto:contato@pratizen.com">contato@pratizen.com</a>
              </li>
              <li>
                Telefone: <a href="https://wa.me/5521995037431" target="_blank" rel="noopener noreferrer">+55 2199503-7431</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}