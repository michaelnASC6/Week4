/*
Area of a triangle
Write a function named triArea that takes the base and height of a triangle and return its area.
Examples
console.log(triArea(3, 2)) //➞ 3
console.log(triArea(7, 4)) //➞ 14
console.log(triArea(10, 10)) //➞ 50
*/

function triArea(x, y){
    const area = (x * y)/2;
    console.log("Area: " + area);
}

triArea(0, 4);