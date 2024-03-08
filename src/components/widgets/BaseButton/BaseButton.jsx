import styles from "./BaseButton.module.css"


export const BaseButton = ({text}) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}