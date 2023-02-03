import React from "react";
import { Grid, Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Menu from "../view/navbar/Menu";

function ExerciceInterface(props) {
    console.log(props)
    return(
        <Grid container
        className="grid"> 
            <Grid item
                sx = {{
                    alignItems: 'stretch',
                    width: '200px',
                }}>
                    <Menu courses={props.courses} setExercice={props.setExercice} setCourse={props.setCourse}></Menu>
            </Grid> 
            <Grid item
                xs = {5}
                sx = {{alignItems: 'stretch'}}>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '50vh'}}>
                        {props.course && props.course.title}
                    </Grid>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '50vh'}}>
                        {props.exercice && props.exercice.title}
                    </Grid>
            </Grid>

            <Grid item
                sx = {{alignItems: 'stretch',
                        flexGrow: 1}}>
               <Grid item>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '65vh'}}></Grid>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '35vh'}}></Grid>
               </Grid>
            </Grid>  
        </Grid>)
}

export default ExerciceInterface;