import { SpaceContent } from './spaces/SpaceContent'
import SettingsIcon from '@mui/icons-material/Settings';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import TableContent from './spaceTable/TableContent'
import TableChartSharpIcon from '@mui/icons-material/TableChartSharp';
import { Link, useParams } from 'react-router-dom';
import ColumnContent from './Table/ColumnContent'


export const TabsRoutesDashboard =[
    
    {
        label:'Espaces',
        component: <SpaceContent />,
        icon:<WorkspacesIcon/>
    },
    {
        label:'Paramètres',
        component: <h1>Paramètres</h1>,
        icon: <SettingsIcon/>
    }
    
    
]


export const TabsRoutesDashboardTable = () => {
    
    let params = useParams()
    console.log(params);

    return [
    
        {
            label:'Vos tableaux',
            component: <TableContent/>,
            icon: <TableChartSharpIcon/>
        },
        {
            label:'Espaces',
            component: '',
            icon:<WorkspacesIcon/>
        },
        {
            label:'Paramètres',
            component: <h1>Paramètres</h1>,
            icon: <SettingsIcon/>
        }
    
    ]
}
export const TabsRoutesDashboardTableDefined = () => {
    
    let params = useParams()
    console.log(params);

    return [
    
        {
            label:'Votre tableau',
            component:<ColumnContent/>,
            icon: <TableChartSharpIcon/>
        },
        {
            label:'Espaces',
            component: '',
            icon:<WorkspacesIcon/>
        },
        {
            label:'Paramètres',
            component: <h1>Paramètres</h1>,
            icon: <SettingsIcon/>
        }
    
    ]
}