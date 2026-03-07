import NavBar from './components/layout/NavBar/NavBar'
import Hero from './components/sections/Hero/Hero';
import CTA from './components/sections/CTA/CTA';
import Servicios from './components/sections/Servicios/Servicios';
import Proceso from './components/sections/Proceso/Proceso';
import Beneficios from './components/sections/Beneficios/Beneficio';
import Testimonios from './components/sections/Testimonios/Testimonios';
import WhatsappFloat from './components/ui/WhatsappFloat/WhatsappFloat';
import Footer from './components/layout/Footer/Footer';


function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Hero />
        <CTA/>
        <Servicios/>
        <Proceso/>
        <Beneficios/>
        <Testimonios/>
      </main>
      <Footer/>
      <WhatsappFloat/>
     
    </>
  );
}

export default App;