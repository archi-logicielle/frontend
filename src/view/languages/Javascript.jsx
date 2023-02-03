import React from "react";
import ExerciceInterface from "../../components/ExerciceInterface";

function Javascript(){
    const [exercice, setExercice] = React.useState(null);
    const [course, setCourse] = React.useState(null);
    
    const exercicesCourse1 = [
        {
            id: 1,
            title: "Exercice 1",
            content: "Description de l'exercice 1"
        },
        {
            id: 2,
            title: "Exercice 2",
            content: "Description de l'exercice 2"
        },
        {
            id: 3,
            title: "Exercice 3",
            content: "Description de l'exercice 3"
        },
        {
            id: 4,
            title: "Exercice 4",
            content: "Description de l'exercice 4",
        },
        {
            id: 5,
            title: "Exercice 5",
            content: "Description de l'exercice 5",
        },
        {
            id: 6,
            title: "Exercice 6",
            content: "Description de l'exercice 6",
        },
        {
            id: 7,
            title: "Exercice 7",
            content: "Description de l'exercice 7",
        },
    ]

    const exercicesCourse2 = [
        {
            id: 1,
            title: "Exercice 1",
            content: "Description de l'exercice 1"
        },
        {
            id: 2,
            title: "Exercice 2",
            content: "Description de l'exercice 2"
        },
        {
            id: 3,
            title: "Exercice 3",
            content: "Description de l'exercice 3"
        },
        {
            id: 4,
            title: "Exercice 4",
            content: "Description de l'exercice 4",
        },
    ]

    const exercicesCourse3 = [
        {
            id: 1,
            title: "Exercice 1",
            content: "Description de l'exercice 1"
        },
        {
            id: 2,
            title: "Exercice 2",
            content: "Description de l'exercice 2",
        },
        {
            id: 3,
            title: "Exercice 3",
            content: "Description de l'exercice 3",
        }
    ]

    const courses = [
        {
            id: 1,
            title: "Cours 1",
            exercices: exercicesCourse1
        },
        {
            id: 2,
            title: "Cours 2",
            exercices: exercicesCourse2
        },
        {
            id: 3,
            title: "Cours 3",
            exercices: exercicesCourse3
        }
    ]

    console.log("course : ", course)
    console.log("exercice : ", exercice)

    return (
        <ExerciceInterface courses={courses} setExercice={setExercice} exercice={exercice} setCourse={setCourse} course={course}></ExerciceInterface>
    )
}

export default Javascript;
