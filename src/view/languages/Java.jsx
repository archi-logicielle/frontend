import React from "react";
import ExerciceInterface from "../../components/ExerciceInterface";

function Java(){
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
            exercices: exercicesCourse1,
            content:"Bon, il va tdsdscdscdscdscsdcdscdscdscdscdscdscdscsdcdscsdscsdcsdcdscdscdscdscsdcscsdcdscsdcdscdscsdcdscsdcsdcsdout de même fallohdir commencer par les bases. Cela tombe bien, nous y sommes. Et nous allons tout de suite voir les notions indispensables ! Commençons par les variables ! Qu’est-ce qu’une variable ?       Une variable est un outil contenant une donnée, par exemple un mot ou un chiffre, et qui va être utilisée par un programme.En quoi est-ce si important ?     Eh bien, concrètement, un programme est constamment en train de manipuler des variables, certaines qu’on lui donne, d’autres qu’il crée de lui-même.On peut comparer une variable à une boîte dans laquelle est rangée une information. Cette boîte est stockée sur une étagère dans un entrepôt gigantesque. L'emplacement de chaque boîte de cet entrepôt est soigneusement enregistré, et géré par l’ordinateur.",
            language:'java'
        },
        {
            id: 2,
            title: "Cours 2",
            exercices: exercicesCourse2,
            content:"dentificateur : suite de  Un identificateur ne doit pas commencer par un chiffre.",
            language:'java'
        },
        {
            id: 3,
            title: "Cours 3",
            exercices: exercicesCourse3,
            content:"Content Cours 3",
            language:'java'
        }
    ]

    console.log("course : ", course)
    console.log("exercice : ", exercice)

    return (
        <ExerciceInterface courses={courses} setExercice={setExercice} exercice={exercice} setCourse={setCourse} course={course}></ExerciceInterface>
    )
}

export default Java;
