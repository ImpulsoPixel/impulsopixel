import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} flex flex-col items-center justify-center text-center py-4`}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Image src="/images/ImpulsoPixelLogo.jpg" alt="Impulso Pixel Logo" width={80} height={40} className="mb-2" />
        </div>
        <div className="flex space-x-4">
          <a href="/hero" className={`${styles.button} ${styles.primary}`}>
          Inicio
          </a>
          <a href="/QuienesSomos" className={`${styles.button} ${styles.secondary}`}>
          Quienes Somos
          </a>
          <a href="/servicios" className={`${styles.button} ${styles.tertiary}`}>
          Servicios
          </a>
          <a href="/contactanos" className={`${styles.button} ${styles.quaternary}`}>
          Proyectos
          </a>
          <a href="/contactanos" className={`${styles.button} ${styles.quinary}`}>
          Contáctanos
          </a>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;