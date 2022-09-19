import HomeContent from '../homeContent/HomeContent'
import ContactContent from'../homeContact/ContactContent'
export const TabsRoutes =[
    {
        label:'Accueil',
        component: <HomeContent/>
    },
    {
        label:'Présentation',
        component: <h1>Présentation</h1>
    },
    {
        label:'Contact',
        component: <ContactContent/>
    },
    {
        label:'Nos Partenaires',
        component: <h1>Nos Partenaires</h1>
    }
]

