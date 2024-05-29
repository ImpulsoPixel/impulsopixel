'use client'

// pages/NuestrosServicios.js
import React from 'react';
import AppServiceCard from '../../serviceCards/AppService';
import MovilServiceCard from '../../serviceCards/MovilService';
import WebServiceCard from '../../serviceCards/WebService';

const NuestrosServicios = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Nuestros Servicios</h1>
            <div className="flex flex-wrap -m-4">
                <WebServiceCard
                    title="Desarrollo Web"
                    description="Descripción del servicio de desarrollo web."
                    imageUrl="/images/desarrollo-web.jpg"
                    buttonText="VER"
                />
                <AppServiceCard
                    title="Desarrollo App"
                    description="Descripción del servicio de desarrollo de aplicaciones."
                    imageUrl="/images/desarrollo-app.jpg"
                    buttonText="VER"
                />
                <MovilServiceCard
                    title="Aplicación Móvil"
                    description="Descripción del servicio de desarrollo de aplicaciones móviles."
                    imageUrl="/images/aplicacion-movil.jpg"
                    buttonText="VER"
                />
                {/* Puedes seguir añadiendo más tarjetas de servicios aquí */}
            </div>
        </div>
    );
};

export default NuestrosServicios;
