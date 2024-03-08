import styles from "./Background.module.css"

export const Background = ({children, style}) => {
    return (
        <section className={styles.container} style={{...style}}>
            {children}
        </section>
    )
}