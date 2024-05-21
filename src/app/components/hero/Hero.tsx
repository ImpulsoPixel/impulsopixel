'use client'

import React from 'react';
import styles from './Hero.module.css'; // Estilos CSS en módulo

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Impulso Pixel</h1>
                <p className={styles.subtitle}>Diseñamos tu futuro digital pixel a pixel</p>
                <button className={styles.cta}>Promoción de Lanzamiento</button>
                <button className={styles.cta}>Cuéntanos tu idea</button>
            </div>
        </section>
    );
};

export default Hero;
