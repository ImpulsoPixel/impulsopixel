
import Hero from './components/hero/Hero';
import Navbar  from './components/navbar/Navbar';
import Servicios from './components/servicios/Servicios';
import Footer from './components/footer/Footer';
import './globals.css';




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Footer />
      
      </div>
  
  );
}
