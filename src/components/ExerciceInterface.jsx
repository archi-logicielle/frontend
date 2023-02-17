import React from "react";
import { Grid, Box} from "@mui/material";
import Menu from "../view/navbar/Menu";
import EditorType from "./Editor";
import parse from 'html-react-parser';
import { exercices } from "../data/java/courses/js/lesson1";

function ExerciceInterface(props) {
    console.log(props)
    console.log(props.exercices)
    const [result, setResult] = React.useState(null);

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
                    
                    <Grid item sx = {{ border: '1px solid #e8e8e8',height: '50vh'}}>
                 
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
                                    {props.course && parse(props.course.description)}
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
                                    {props.exercice && parse(props.exercice.description)}
                                    {props.exercice.image && <img
                                        style={{width: '90%'}}
                                        src={props.exercice.image}
                                        alt={props.exercice.title}>
                                    </img>}
                                </Box>
                            
                        </Box>}
                        {props.course && !props.exercice && <Box variant="outlined" 
                        elevation={24}
                        
                        sx={{
                            height:'90%',
                            marginTop:'2rem',
                            marginX:"1rem",
                            wordWrap: 'break-word',
                            overflowY: "scroll"
                          
                        }}><h1>Exemple</h1>
                          
                                <Box>
                                    {props.course && parse(props.course.exemple)}
                                    {props.course.exemple && <img
                                        style={{width: '90%'}}
                                        src={props.course.image}
                                        alt={props.course.title}>
                                    </img>}
                                </Box>
                            
                        </Box>}
                    </Grid>
            </Grid>

            <Grid item className="grid"
                sx = {{alignItems: 'stretch',
                        flexGrow: 1}}>
               <Grid item>
                    <Grid item sx = {{ height: '65vh'}}>{props.exercice && <EditorType language={props.course.language} language_id={props.course.language_id} code={props.exercice.code} setResult={setResult}  exores={props.exercice.answer}/>}</Grid>
              
               </Grid>
            </Grid>  
        </Grid>)
}

export default ExerciceInterface;