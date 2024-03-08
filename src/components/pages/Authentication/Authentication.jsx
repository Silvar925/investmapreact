import styles from "./Authentication.module.css"

export const Authentication = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.title}>
                    <h2><span className={styles.first}>Инвеститционная карта</span>
                        <span className={styles.second}>Карачаево-Черкессии</span></h2>
                </div>

                <div className={styles.authorization}>
                    <input type="text" placeholder="" />
                    <input type="text" placeholder="" />

                </div>
            </div>


        </div >
    )
} 