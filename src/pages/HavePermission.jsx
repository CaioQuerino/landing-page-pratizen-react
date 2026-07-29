import Header from '../components/Header';
import Mission from '../components/Mission';
import Practice from '../components/Practice';
import Features from '../components/Features';
import Contact from '../components/Contact';

export default function HavePermission() {
  return (
    <>
      <Header />
      <main>
        <Mission />
        <Practice />
        <Features />
        <Contact />
        <footer>
          <p>&copy; 2025 Pratizen. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  );
}