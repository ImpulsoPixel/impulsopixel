import styles from './styles/figureGrey.module.css';

const FigureGrey = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.square} ${styles.black}`}></div>
            <div className={`${styles.square} ${styles.darkGray}`}></div> 
            <div className={`${styles.square} ${styles.gray}`}></div>
            <div className={`${styles.square} ${styles.darkGray}`}></div>            
            <div className={`${styles.square} ${styles.gray}`}></div>
            <div className={`${styles.square} ${styles.gray}`}></div>
        </div>
    );
};

export default FigureGrey;
