import Header from '../components/Header';
import Mission from '../components/Mission';
import Practice from '../components/Practice';
import Features from '../components/Features';
import Contact from '../components/Contact';

export default function HavePermission() {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <main className="container py-5">
        <Mission />
        <Practice />
        <Features />
        <Contact />
        <footer className="text-center py-4 mt-5 border-top">
          <p className="mb-0 text-secondary">&copy; 2025 Pratizen. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}