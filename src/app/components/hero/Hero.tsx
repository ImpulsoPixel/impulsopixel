import Image from 'next/image';
import styles from './Hero.module.css';
import FigureGrey from '../hero/figures/FigureGrey';
import FigureBlue from './figures/FigureBlue';
import FigureGreen from './figures/FigureGreen';

const Hero = () => {
    return (
        <div className={`${styles.hero} flex flex-col items-center justify-center text-center h-screen`}>
            <div className={styles.topLeftCorner}>
                <FigureGrey />
            </div>
            <div className={styles.bottomLeftCorner}>
                <FigureBlue />
            </div>
            <div className={styles.bottomRightCorner}>
                <FigureGreen />
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/ImpulsoPixelLogo.jpg" alt="Impulso Pixel Logo" width={100} height={100} className="mb-4" />
                <h1 className={`${styles.title} text-4xl font-bold text-black mb-2`}>Impulso Pixel</h1>
                <p className="text-xl text-gray-600 mb-6">Diseñamos tu futuro digital, pixel a pixel</p>
            </div>
            <div className="flex space-x-4">
                <a href="/promocion" className={`${styles.button} ${styles.primary}`}>
                    Promoción
                </a>
                <a href="/blog" className={`${styles.button} ${styles.secondary}`}>
                    Cuéntanos tu idea
                </a>
            </div>
        </div>
    );
};

export default Hero;
