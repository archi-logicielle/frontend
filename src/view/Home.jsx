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

const modules = [
  {
    image: "../../images/php.jpg",
    alt: "php",
    title: "PHP",
    ready: false,
    link: "/php",
    description:
      "PHP est un langage dit « script » qui permet de faire des communications côté serveur. Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, la modification de bases de données",
  },
  {
    image: "../../images/java.jpg",
    alt: "Java",
    title: "JAVA",
    ready: true,
    link: "/java",
    description:
      "PHP est un langage dit « script » qui permet de faire des communications côté serveur. Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, la modification de bases de données",
  },
  {
    image: "../../images/js.png",
    alt: "javascript",
    title: "Javascript",
    ready: true,
    link: "/js",
    description:
      "PHP est un langage dit « script » qui permet de faire des communications côté serveur. Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, la modification de bases de données",
  },
  {
    image: "../../images/linux-shell.jpg",
    alt: "linux",
    title: "Bash",
    ready: false,
    link: "/bash",
    description:
      "PHP est un langage dit « script » qui permet de faire des communications côté serveur. Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, la modification de bases de données",
  },
  {
    image: "../../images/ubuntu.png",
    alt: "Ubuntu",
    title: "Machine virtuelle",
    ready: false,
    link: "/vm",
    description:
      "PHP est un langage dit « script » qui permet de faire des communications côté serveur. Il peut donc gérer diverses fonctions telles que la collecte de données de formulaires, la gestion de fichiers sur le serveur, la modification de bases de données",
  },
];
  
function Home(){
    const classes = useStyles();
    return (
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {modules.map((module) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              {module.ready ?
                <a href={module.link} style={{textDecoration: 'none'}}>
                  <CodeCard
                    image={module.image}
                    alt={module.alt}
                    title={module.title}
                    description={module.description}
                  />
                </a> : 
                <CodeCard
                  image={module.image}
                  alt={module.alt}
                  title={module.title + " - A venir"}
                  description={module.description}
              />}
            </Grid>
          );
        })}
           
      </Grid>
      );
}

export default Home;