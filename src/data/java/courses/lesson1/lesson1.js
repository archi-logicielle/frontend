import { ex1Java } from "./exercices";

const description = "The ArrayList class is a resizable array, which can be found in the java.util package.<br/>The difference between a built-in array and an ArrayList in Java, is that the size of an array cannot be modified (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and removed from an ArrayList whenever you want. The syntax is also slightly different:"

const exemple = "Let's create an ArrayList object called cars that will store strings:"

export const exercices = [
    ex1Java,
];

export const lesson1Java = {
    id: 1,
    title: "Java ArrayList",
    description: description,
    exemple: exemple,
    image: "../../images/javacours1exemple.png",
    exercices: exercices,
    language: "java",
    langage_id: 62
};


