import { useState, useEffect } from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"


export const Header = ({ authorization }) => {
    const [textProfile, setTextProfile] = useState(false)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 320 && window.innerWidth <= 435) {
                setTextProfile(false);
            } else {
                setTextProfile(true);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Вызываем функцию при первом рендере, чтобы установить начальное значение

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <header>
            <nav className={styles.nav}>
                <Link to="/"><img src="banner.svg" alt="investmapkchr" /></Link>

                {
                    authorization === true ? (
                        <div className={styles.profileBox}>
                            <img src="/avatar.jpg" alt="#" />

                            <div className={styles.profileInfo}>
                                <h2>Али Мамчуев</h2>
                                <p><span>Ваш id: </span> <span>#0001</span></p>
                            </div>
                        </div>

                    ) : (
                        <div className={styles.temp}>
                            <Link to="/authentication"><img src="icons/profile.svg" alt="userProfilePage" />{textProfile === true ? 'Личный кабинет' : ''}</Link>
                        </div>
                    )
                }




            </nav>
        </header>
    )
}