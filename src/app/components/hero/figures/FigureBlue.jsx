import styles from './styles/figureBlue.module.css';

const FigureBlue = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.square} ${styles.lightBlue}`}></div>
            <div className={`${styles.square} ${styles.blue}`}></div>
            <div className={`${styles.square} ${styles.lightBlue}`}></div>
            <div className={`${styles.square} ${styles.darkBlue}`}></div>
            <div className={`${styles.square} ${styles.blue}`}></div>
            <div className={`${styles.square} ${styles.lightBlue}`}></div>
        </div>
    );
};

export default FigureBlue;
