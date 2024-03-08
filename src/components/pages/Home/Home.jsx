import styles from "./Home.module.css"
import { Header } from "../../widgets/Header/Header"
import { Sidebar } from "../../sections/Sidebar/Sidebar"
import { InvestMap } from "../../sections/InvestMap/InvestMap"
import { InfoPanel } from "../../widgets/InfoPanel/InfoPanel"

import { useState } from "react"
import { typeObjects, allObjects } from "../../data"


export const Home = () => {
    const [isAuthorization, setIsAuthorization] = useState(false);
    const [isOpenInfoPanel, setIsOpenInfoPanel] = useState(false);
    const [isClick, setIsClick] = useState(false);

    const clickMarker = (input) => {
        console.log(input)
        setIsOpenInfoPanel(!isOpenInfoPanel)
    }

    return (
        <>
            <Header authorization={isAuthorization} />

            <section className={styles.container}>
                <Sidebar items={typeObjects} type="home" />

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <InvestMap objects={allObjects}
                        isOpenInfoPanel={isOpenInfoPanel}
                        setIsOpenInfoPanel={setIsOpenInfoPanel}
                        clickMarker = {clickMarker}
                    />
                    <InfoPanel switching={isOpenInfoPanel} setIsOpenInfoPanel={setIsOpenInfoPanel} />
                </div>

            </section>
        </>
    );
};
