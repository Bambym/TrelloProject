import React from "react";
import TabPanel from "./TabPanel";


export default function ContentTabs({activeTab}) {

    return(
        <>
            <TabPanel activeTab={activeTab} index={0}>
                Accueil
            </TabPanel>
            <TabPanel activeTab={activeTab} index={1}>
                Presentation
            </TabPanel>
            <TabPanel activeTab={activeTab} index={2}>
                Contact
            </TabPanel>
            <TabPanel activeTab={activeTab} index={3}>
                Nos partenaires
            </TabPanel>
        </>
    )
}

