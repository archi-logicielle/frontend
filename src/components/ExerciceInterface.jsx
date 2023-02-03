import React from "react";
import { Grid, Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Menu from "../view/navbar/Menu";

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

function ExerciceInterface(props) {
    console.log(props)
    return(
        <Grid container
        className="grid"> 
            <Grid item
                style = {appliedStyle}
                sx = {{
                    alignItems: 'stretch',
                    width: '200px',
                }}>
                    <Menu courses={props.courses} setExercice={props.setExercice} setCourse={props.setCourse}></Menu>
            </Grid> 
            {/* {course && <div>
        //             {course.title}
        //         </div>}
        //         {exercice && <div>
        //             {exercice.title} <br />
        //             {exercice.content} <br />
        //         </div>} */}
            <Grid item
                xs = {5}
                sx = {{alignItems: 'stretch'}}>
                    {/* <Grid item sx = {{appliedStyle}}></Grid> */}
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