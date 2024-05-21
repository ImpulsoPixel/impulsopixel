'use client'

import React from 'react';
import styles from './Hero.module.css'; // Estilos CSS en módulo

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Título Principal Impactante</h1>
                <p className={styles.subtitle}>Subtítulo o breve descripción de tu propuesta de valor.</p>
                <button className={styles.cta}>Llamado a la Acción</button>
            </div>
        </section>
    );
};

export default Hero;
