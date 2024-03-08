import { Link } from "react-router-dom"
import styles from "./PageNotFound.module.css"

export const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1>PAGE 404 - Страница не найдена</h1>
            <h2>Нажмите на кнопку ниже, что бы вернуться на главную страницу</h2>
            <Link to="/" className={styles.button}>Вернуться на главную страницу</Link>
        </div>
    )
}