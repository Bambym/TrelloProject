import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';





function CentralCard({children}) {

    
    return (
        <div className="central-card">

            <Card sx={{ maxWidth: 700 }}>

                <CardHeader
                    title="Un outil vraiment vraiment formidable"
                    subheader="Vraiment Formidable..."
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                
                {
                    children !== undefined && children 
                }

            </Card>
        </div>
    );
}

export default CentralCard;