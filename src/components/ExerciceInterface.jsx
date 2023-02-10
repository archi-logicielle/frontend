import React from "react";
import { Grid, Box, Paper} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Menu from "../view/navbar/Menu";
import { Padding } from "@mui/icons-material";
import EditorType from "./Editor";
import parse from 'html-react-parser';

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

function ExerciceInterface(props) {
    console.log(props.course)
    return(
        <Grid container> 
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
                    
                    <Grid item sx = {{ height: '50vh'}}>
                 
                       {props.course && <Box variant="outlined" 
                        elevation={24}
                        
                        sx={{
                            height:'90%',
                            width:"auto",
                            marginTop:'2rem',
                            marginX:"1rem",
                            wordWrap: 'break-word',
                            overflowY: "scroll"
                        }}><h1>{props.course && props.course.title}</h1>
                            
                                <Box sx={{

                                }}>
                                    {props.course && props.course.content}
                                </Box>
                            
                        </Box>}
                    
                    </Grid>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '50vh'}}>
                    
                        {props.exercice && <Box variant="outlined" 
                        elevation={24}
                        
                        sx={{
                            height:'90%',
                            marginTop:'2rem',
                            marginX:"1rem",
                            wordWrap: 'break-word',
                            overflowY: "scroll"
                          
                        }}><h1>{props.exercice && props.exercice.title}</h1>
                          
                                <Box>
                                    {props.exercice && parse(props.exercice.content)}
                                </Box>
                            
                        </Box>}
                    </Grid>
            </Grid>

            <Grid item className="grid"
                sx = {{alignItems: 'stretch',
                        flexGrow: 1}}>
               <Grid item>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '65vh'}}>{props.exercice && <EditorType language={props.course.language}/>}</Grid>
                    <Grid item sx = {{border: '1px solid #e8e8e8', height: '35vh'}}>Reponse</Grid>
               </Grid>
            </Grid>  
        </Grid>)
}

export default ExerciceInterface;