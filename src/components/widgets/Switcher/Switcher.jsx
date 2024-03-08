import { useState } from "react";
import styles from "./Switcher.module.css";

export const Switcher = ({ text }) => {
    const [isSwitch, setIsSwitch] = useState(false)

    return (
        <div className={styles.switchBox}>
            <label className={styles.switch} htmlFor="myObjects">
                <input type="checkbox" checked={isSwitch} onChange={() => {console.log(123); setIsSwitch(!isSwitch)}}/>
                <span className={styles.slider}></span>
            </label>
            <p>{text}</p>
        </div>
    );
};
