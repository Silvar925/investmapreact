import { useState } from "react"
import styles from "./DropDownList.module.css"

export const DropDownList = ({ items }) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const [changeArrow, setChangeArrow] = useState(false)
    const [item, setItem] = useState(null)

    const clickDropDownList = () => {
        setIsOpenDropDown(!isOpenDropDown)
        setChangeArrow(!changeArrow)
    }

    const clickItem = (item) => {
        setItem(item)
        setIsOpenDropDown(false)
        setChangeArrow(false)
    }


    return (
        <div className={styles.dropDownContainer}>
            <button className={styles.dropDown} onClick={clickDropDownList}>
                <p>{item ? item : 'Выберите регион'}</p>
                <img src={changeArrow ? "/angle-small-up.svg" : "/angle-small-down.svg"} alt="#" />
            </button>

            {isOpenDropDown && (
                <ul className={styles.dropDownList}>
                    {items.map((item, index) => (
                        <li key={index} onClick={() => clickItem(item)}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
