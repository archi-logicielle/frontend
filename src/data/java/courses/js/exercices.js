export const ex1Js = {
    id: 1,
    title: "Sorting an Array",
    description: 'The sort() method sorts an array alphabetically. The array fruits is as follows : ["Banana", "Orange", "Apple", "Mango"]. Sort it.',
    answer: ["fruits.sort()", 'fruits.sort();']
};

export const ex2Js = {
    id: 2,
    title: "Reversing an Array",
    description: "The reverse() method reverses the elements in an array. The array fruits is as follows : ['Banana', 'Orange', 'Apple', 'Mango']. Reverse it.",
    answer: ["fruits.reverse()", 'fruits.reverse();']
};

export const ex3Js = {
    id: 3,
    title: "Sorting Numbers",
    description: 'By default, the sort() function sorts values as strings.<br/>This works well for strings ("Apple" comes before "Banana").<br />However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".<br/>Because of this, the sort() method will produce incorrect result when sorting numbers.<br/>You can fix this by providing a compare function.<br/>The following exemple sorts an array on ascending order. Sort it on descending order.',
    image: "../../images/jscours1ex3exemple.png",
    answer: ["points.sort(function(a, b){return b - a})", 'points.sort(function(a, b){return b - a});']
};