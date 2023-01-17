import CodeCard from "../components/CodeCard";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px",
      marginTop: "40px"
    }
  });
  
function Home(){
    const classes = useStyles();
    return (
      <Grid
        container
        spacing={4}
       // margin={1}
        className={classes.gridContainer}
        justify="center"
      >
        
        <Grid item xs={12} sm={6} md={4}>
          <CodeCard image="../../images/php.jpg" alt="php" title="PHP" description="
          PHP est un langage dit « script » 
          qui permet de faire des communications côté serveur.
           Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, 
          la modification de bases de données
          "/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CodeCard image="../../images/java.jpg" alt="Java" title="JAVA" description="
          PHP est un langage dit « script » 
          qui permet de faire des communications côté serveur.
           Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, 
          la modification de bases de données
          "/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>

          <CodeCard image="../../images/js.png" alt="javascript" title="Javascript" description="
          PHP est un langage dit « script » 
          qui permet de faire des communications côté serveur.
           Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, 
          la modification de bases de données
          "/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CodeCard image="../../images/linux-shell.jpg" alt="linux" title="Bash" description="
          PHP est un langage dit « script » 
          qui permet de faire des communications côté serveur.
           Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, 
          la modification de bases de données
          "/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CodeCard image="../../images/ubuntu.png" alt="Ubuntu" title="Machine virtuelle" description="
          PHP est un langage dit « script » 
          qui permet de faire des communications côté serveur.
           Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, 
          la modification de bases de données
          "/>

        </Grid>
           
      </Grid>
      );
}

export default Home;