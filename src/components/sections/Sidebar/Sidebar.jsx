import styles from "./Sidebar.module.css"
import { BaseButton } from "../../widgets/BaseButton/BaseButton"
import { Switcher } from "../../widgets/Switcher/Switcher"
import { DropDownList } from "../../widgets/DropDownList/DropDownList"

import { listRegion } from "../../data"

export const Sidebar = ({ items, type }) => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.nav}>

                {type === 'home' ? (
                    <div className={styles.regionsBox}>
                        <h2>Регионы</h2>

                        <div>
                            <DropDownList items = {listRegion}/>
                        </div>
                    </div>
                ) : (
                    <div className={styles.profileBox}>
                        <img src="/avatar.jpg" alt="avatar" />

                        <div className={styles.profileInfo}>
                            <h2>Али Мамчуев</h2>
                            <p><span>Ваш id</span> <span>0005</span></p>
                        </div>

                    </div>
                )

                }


                <ul>
                    <h2>Выеберите тип объекта</h2>
                    {
                        Object.keys(items).map((item, index) => {
                            return (
                                <Switcher key={index} text={items[item]} />
                            )
                        })
                    }
                </ul>

            </nav>

            <div className={styles.buttonsBox}>
                <BaseButton text="Очистить" />
                <BaseButton text="Список" />
            </div>

        </div>

    )
}