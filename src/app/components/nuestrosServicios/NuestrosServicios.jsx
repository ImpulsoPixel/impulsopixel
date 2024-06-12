'use client'

// pages/NuestrosServicios.js
import React from 'react';
import AppServiceCard from '../serviceCards/AppService';
import MovilServiceCard from '../serviceCards/MovilService';
import WebServiceCard from '../serviceCards/WebService';
import styles from './Servicios.module.css';

const NuestrosServicios = () => {
    return (
        <div className={styles.services}>
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h1>
            <div className="flex flex-col">
                <WebServiceCard
                    title="Desarrollo Web"
                    description="¡Haz que tu presencia en línea destaque con nuestro desarrollo web personalizado! En Impulso Pixel,
                     creamos experiencias digitales únicas y atractivas que 
                     cautivan a tus clientes desde el primer clic. Desde la planificación hasta la implementación,
                      nuestro equipo experto se asegurará de que tu sitio web refleje la esencia de tu marca 
                    y alcance tus objetivos comerciales. ¡Confía en nosotros para llevar tu negocio al siguiente nivel en línea!"
                    imageUrl="/images/servicios/desarrolloweb.jpeg"
                    buttonText="VER"
                />
                <AppServiceCard
                    title="Desarrollo App"
                    description="Potencia tu negocio con nuestra aplicación web personalizada! En Impulso Pixel,
                     creamos soluciones digitales innovadoras que llevan la experiencia del usuario al siguiente nivel.
                      Desde la conceptualización hasta el lanzamiento, nuestro equipo de desarrollo trabajará contigo para 
                      transformar tus ideas en una aplicación web funcional y atractiva. Ofrecemos una experiencia fluida
                       en todos los dispositivos para que tus clientes puedan interactuar con tu negocio en cualquier momento y lugar. 
                       ¡Descubre cómo nuestra aplicación web puede impulsar tu crecimiento y mejorar la experiencia de tus usuarios hoy mismo!"
                    imageUrl="/images/servicios/desarrolloapp.jpeg"
                    buttonText="VER"
                />
                <MovilServiceCard
                    title="Aplicación Móvil"
                    description="¡Lleva tu negocio a todas partes con nuestra Aplicación Móvil! En Impulso pixel,
                     hemos creado una aplicación intuitiva y potente que te permite gestionar tu negocio desde 
                     la palma de tu mano. Desde el seguimiento de ventas hasta la atención al cliente, nuestra aplicación 
                     te brinda todas las herramientas que necesitas para tener éxito estés donde estés. Con una interfaz
                      elegante y funcionalidades avanzadas, nuestra aplicación te ayudará a aumentar la eficiencia, mejorar
                       la productividad y mantener a tus clientes comprometidos en todo momento. ¡Descarga nuestra aplicación
                        y lleva tu negocio al siguiente nivel hoy mismo!"
                    imageUrl="/images/servicios/desarrollomovil.jpeg"
                    buttonText="VER"
                />
                {/* Puedes seguir añadiendo más tarjetas de servicios aquí */}
            </div>
        </div>
        </div>
    );
};

export default NuestrosServicios;
