
import Hero from './components/hero/Hero';
import Navbar  from './components/navbar/Navbar';
import Servicios from './components/servicios/Servicios';
import Footer from './components/footer/Footer';
import './globals.css';
import NuestrosServicios from './components/nuestrosServicios/NuestrosServicios';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NuestrosServicios />
      <Servicios />
      <Footer />

     
   
      </div>
  
  );
}
