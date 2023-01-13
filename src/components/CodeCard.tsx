import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CodeCard() {
   /*  const props ={} */
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="../assets/php.jpg"
          alt="php"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHP
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Server based Language
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}