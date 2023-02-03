import React from "react";
import { Grid, Box} from "@mui/material";
import { createTheme } from "@mui/system";

const theme = createTheme({
    border : 3,
    borderColor : 'white',
    backgroundColor : 'grey'
})

function ExerciceInterface() {
    return(
        <Grid container> 
            <Grid item
                sx = {{
                    theme,
                    alignItems: 'stretch',
                    width: '200px',
                }}>
            </Grid> 

            <Grid item
                xs = {5}
                sx = {{alignItems: 'stretch'}}>
                    <Grid item sx = {{height: '50vh'}}></Grid>
                    <Grid item sx = {{height: '50vh'}}></Grid>
            </Grid>

            <Grid item className="grid"
                sx = {{alignItems: 'stretch',
                        flexGrow: 1}}>
               <Grid item>
                    <Grid item sx = {{height: '65vh'}}></Grid>
                    <Grid item sx = {{height: '35vh'}}></Grid>
               </Grid>
            </Grid>  
        </Grid>)
}

export default ExerciceInterface;