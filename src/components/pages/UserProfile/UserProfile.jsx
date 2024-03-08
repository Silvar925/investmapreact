import styles from "./UserProfile.module.css"
import { Header } from "../../widgets/Header/Header"
import { Sidebar } from "../../sections/Sidebar/Sidebar"
import { Background } from "../../widgets/Background/Background"

export const UserProfile = () => {
    return (
        <>
            <Header />

            <section className={styles.container}>
                <Sidebar items={{
                    allObjects: 'Все объекты',
                    favouriteObjects: 'Избранные объекты'
                }} type="userProfile"/>
                
                <Background>

                </Background>
                
            </section>
        </>
    )
}