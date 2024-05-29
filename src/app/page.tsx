import Image from 'next/image';
import Hero from './components/hero/Hero';
import './globals.css';
import NuestrosServicios from './components/vistas/nuestrosServicios/NuestrosServicios';


export default function Home() {
  return (
    <div>
      <Hero />
      <NuestrosServicios />
     

      </div>
  
  );
}
