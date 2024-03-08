import styles from "./Home.module.css"
import { Header } from "../../widgets/Header/Header"
import { Sidebar } from "../../sections/Sidebar/Sidebar"
import { InvestMap } from "../../sections/InvestMap/InvestMap"
import { InfoPanel } from "../../widgets/InfoPanel/InfoPanel"

import { useState } from "react"
import { typeObjects } from "../../data"


export const Home = () => {
    const [isAuthorization, setIsAuthorization] = useState(false)
    const [isOpenInfoPanel, setIsOpenInfoPanel] = useState(false)

    return (
        <>
            <Header authorization={isAuthorization} />

            <section className={styles.container}>
                <Sidebar items = {typeObjects} type="home"/>
                <InvestMap />
                <InfoPanel switching = {isOpenInfoPanel}/>
            </section>
        </>
    )
}