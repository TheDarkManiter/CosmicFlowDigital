import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main className="main-content">
          <AppRouter />
        </main>
        <CTA
          label="Hablemos por WhatsApp"
          helper="Respuesta rápida en horario laboral."
          href="https://wa.me/525578296609"
          variant="floating"
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
