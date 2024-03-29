import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CodeCard(props) {
     const {image,alt,title,description}=props
  return (
    

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{height: 140}}
          component="img"
          height={140}
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}