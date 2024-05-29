import Image from 'next/image';
import React from 'react';

// Definimos una interfaz para las props
interface WebServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
}

const WebServiceCard: React.FC<WebServiceCardProps> = ({ title, description, imageUrl, buttonText }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <Image src={imageUrl} alt={title} width={400} height={250} className="object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default WebServiceCard;
