import styles from "./InfoPanel.module.css"

export const InfoPanel = ({ children, switching }) => {
    if (switching) {
        return (
            <div className={styles.infoPanel}>
                <div className={styles.tittle}>
                    <h2>Информация</h2>

                    <div className={styles.buttons}>
                        <a href="#">З</a>
                        <a href="#">Х</a>
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    {children}
                </div>
            </div>
        )
    }

}