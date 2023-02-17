export const ex1Java = {
    id: 1,
    title: "Add Items",
    description: "To add elements to the ArrayList, use the add() method. Add the brand 'Renault' to the array cars.",
    answer:"W1ZvbHZvLCBCTVcsIEZvcmQsIE1hemRhLCBSZW5hdWx0XQo=",
    code: "import java.util.*;\npublic class Main {\npublic static void main(String[] args) {\nArrayList<String> cars = new ArrayList<String>(Arrays.asList(\"Volvo\",\"BMW\",\"Ford\",\"Mazda\"));\n//cars.add(\"Renault\");\nSystem.out.println(cars);\n}\n}"
};

export const ex2Java = {
    id: 2,
    title: "Access an Item",
    description: "To access an element in the ArrayList, use the get() method and refer to the index number. Access the first element of the array cars.",
    answer: ['cars.get(0);'],
    code:"import java.util.*;\nArrayList<String> cars = new ArrayList<String>();\ncars.add(\"Volvo\");\ncars.add(\"BMW\");\ncars.add(\"Ford\");\ncars.add(\"Mazda\");\ncars.add(\"Renault\");\nSystem.out.println(cars.get(0));"
};

export const ex3Java = {
    id: 3,
    title: "Change an Item",
    description: "To modify an element, use the set() method and refer to the index number and the new value. Change the first value of the array cars to 'Opel'.",
    answer: ['cars.set(0, "Opel");'],
    code:"import java.util.*;\nimport java.util.ArrayList;\npublic class Main {\npublic static void main(String[] args) {\nArrayList<String> cars = new ArrayList<String>();\ncars.add(\"Volvo\");\ncars.add(\"BMW\");\ncars.add(\"Ford\");\ncars.add(\"Mazda\");\ncars.add(\"Renault\");\nSystem.out.println(cars);\n}\n}"
};

export const ex4Java = {
    id: 4,
    title: "Remove one Item",
    description: "To remove an element, use the remove() method and refer to the index number. Remove the first element in the array cars.",
    answer: ['cars.remove(0);'],
    code:"import java.util.*;\nArrayList<String> cars = new ArrayList<String>();\ncars.add(\"Volvo\");\ncars.add(\"BMW\");\ncars.add(\"Ford\");\ncars.add(\"Mazda\");\ncars.add(\"Renault\");\nSystem.out.println(cars.get(0));"
};

export const ex5Java = {
    id: 5,
    title: "Remove all Items",
    description: "To remove all the elements in the ArrayList, use the clear() method. Clear the array cars.",
    answer: ['cars.clear();'],
    code:"import java.util.*;\nArrayList<String> cars = new ArrayList<String>();\ncars.add(\"Volvo\");\ncars.add(\"BMW\");\ncars.add(\"Ford\");\ncars.add(\"Mazda\");\ncars.add(\"Renault\");\nSystem.out.println(cars.get(0));"
};

export const ex6Java = {
    id: 6,
    title: "ArrayList Size",
    description: "To find out how many elements an ArrayList have, use the size method. Find out how many elements the array cars have.",
    answer: ['cars.size();'],
    code:""
};