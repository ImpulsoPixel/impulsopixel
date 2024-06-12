import styles from './styles/figureGreen.module.css';

const FigureGreen = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.square} ${styles.lightGreen}`}></div>
            <div className={`${styles.square} ${styles.lightGreen}`}></div>
            <div className={`${styles.square} ${styles.green}`}></div>       
            <div className={`${styles.square} ${styles.lightGreen}`}></div>
            <div className={`${styles.square} ${styles.green}`}></div>    
            <div className={`${styles.square} ${styles.darkGreen}`}></div>
        </div>
    );
};

export default FigureGreen;
