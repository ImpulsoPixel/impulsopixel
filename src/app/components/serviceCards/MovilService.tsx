import Image from 'next/image';
import React from 'react';
import styles from '../../components/serviceCards/styles/CardsServices.module.css';

interface MovilServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
}

const MovilServiceCard: React.FC<MovilServiceCardProps> = ({ title, description, imageUrl, buttonText }) => {
    return (
        <div className={styles.movilcard}>
            <Image src={imageUrl} alt={title} width={400} height={250} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <button className={styles.button}>{buttonText}</button>
            </div>
        </div>
    );
};

export default MovilServiceCard;
