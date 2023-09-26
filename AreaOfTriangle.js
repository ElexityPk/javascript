
//////////////////////// JavaScript: Find the area of a triangle where lengths of the three of its sides are 5, 6, 7////////////////////////////




// Calculate the area of a triangle of three given sides :
// In geometry, Heron's formula named after Hero of Alexandria, gives the area of a 
// triangle by requiring no arbitrary choice of side as base or vertex as origin, 
// contrary to other formulas for the area of a triangle, such as
//  half the base times the height or half the norm of a cross product of two sides.


// The Math.sqrt() function is used to get the square root of a number. If the value of the number is negative, Math.sqrt() returns NaN.



// const side1 = 5;
// const side2 = 6;
// const side3 = 7;

// const perimeter = (side1 + side2 + side3) / 2;
// console.log(perimeter); 

// const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
// console.log(area);

///////////////////////////////// Area of Triangle ,Rectangle ,and Circle ////////////////////////////////

// var area = "triangle";
// var PI = 3.142;
// var Radius = 5;
// var Lenth = 8;
// var width = 9;

// if(area == "circle"){
//     console.log("The area of circle is : " + PI*Radius**2 );

// }else if(area == "rectangle"){
//     console.log("The area of Rectangle is : " + (Lenth*width));
// }else if(area == "triangle"){
//     console.log("The area of Triangle is : " + (Lenth*width)/2);
// }else{
//     console.log("Please enter a valid data");
// }

///////////////////////// Area of circle rectangle and triangle with Switch Case statement ///////////////////////////////



var area = "trianoogle";
var PI = 3.142;
var Radius = 5;
var Lenth = 8;
var width = 9;

switch(area){
    case "circle" :
    console.log("The area of circle is : " + PI*Radius**2 );
    break;
    case "rectangle" :
    console.log("The area of Rectangle is : " + (Lenth*width));
    break;
    case "triangle" :
    console.log("The area of Triangle is : " + (Lenth*width)/2);
    break;
    default:
    console.log("Please enter a valid data");
}