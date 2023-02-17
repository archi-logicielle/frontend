import React from "react";
import ExerciceInterface from "../../components/ExerciceInterface";
import { coursesJava } from "../../data/java/lessons";

function Java(){
    const [exercice, setExercice] = React.useState(null);
    const [course, setCourse] = React.useState(null);

    console.log("course : ", course)
    console.log("exercice : ", exercice)

    return (
        <ExerciceInterface courses={coursesJava} setExercice={setExercice} exercice={exercice} setCourse={setCourse} course={course} exores={exercice}></ExerciceInterface>
    )
}

export default Java;
