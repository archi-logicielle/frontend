import CodeCard from "../components/CodeCard";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import { data } from "../data/index";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px",
      marginTop: "40px"
    }
  });
  
function Home(){
    const classes = useStyles();

    const modules = data;
    
    return (
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
        sx={{ marginTop: '10px', marginBottom: '20px' }}
      >
        {modules.map((module, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
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