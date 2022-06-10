import styles from './AgeError.module.css';

const AgeError = (props) => {
    // console.log(props.age);
    // if props.age >0?${styles.overlay} ${styles.hidden}:${styles.overlay}

    return (
        <div className={styles.overlay}>
            <div className={styles.card}>
                <header className={styles.header}>Invalid Input</header>
                <div>
                    <h2>{props.error}</h2>
                    <button onClick={props.onClose}>Okay</button>
                </div>
            </div>

            {/* <div className="overlay hidden"></div> */}
        </div>
    );
}

export default AgeError;