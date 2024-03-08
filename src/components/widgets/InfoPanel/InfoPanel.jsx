import styles from "./InfoPanel.module.css"

export const InfoPanel = ({ switching, setIsOpenInfoPanel }) => {

    if (switching) {
        return (
            <div className={styles.infoPanel} style={{ position: "absolute" }}>
                <div className={styles.tittle}>
                    <h2>Информация</h2>

                    <div className={styles.buttons}>
                        <a href="#">З</a>
                        <a href="#" onClick={() => {setIsOpenInfoPanel(false)}}>Х</a>
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <h1>asd</h1>
                </div>
            </div>
        )
    }

}