import React from "react";
import { Grid, Box} from "@mui/material";
import { makeStyles } from "@mui/styles";

function GridSx() {
    return(
        <Grid container
          sx={{
            border: 1,
            borderColor: 'primary.main',
            backgroundColor: 'primary.light',
            color: 'primary.main',
            height: '100vh',
          }}>
            <h1>CodeCard</h1>
        </Grid>
    )
}

const appliedStyle = {
    grid: {border : 1,
    borderColor : 'white',
    backgroundColor : 'grey'}
}

function ExerciceInterface() {
    return(
        <Grid container
        className="grid"> 
            <Grid item
                style = {appliedStyle}
                sx = {{
                    alignItems: 'stretch',
                    width: '200px',
                }}>
            </Grid> 

            <Grid item
                xs = {5}
                sx = {{alignItems: 'stretch'}}>
                    <Grid item sx = {{appliedStyle}}></Grid>
                    <Grid item sx = {{backgroundColor: 'green', height: '50vh'}}></Grid>
            </Grid>

            <Grid item
                sx = {{alignItems: 'stretch',
                        flexGrow: 1}}>
               <Grid item>
                    <Grid item sx = {{backgroundColor: 'grey', height: '65vh'}}></Grid>
                    <Grid item sx = {{backgroundColor: 'red', height: '35vh'}}></Grid>
               </Grid>
            </Grid>  
        </Grid>)
}

export default ExerciceInterface;