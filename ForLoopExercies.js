

////////////////////////////////////// Table Writing With For loop ///////////////////////////////////////

for(i = 1;i<=100;i++){

    var fortable = 8;
console.log(fortable  + " * " + i + " = " + fortable*i);


}

//////////////////////// For in loop ES6 ////////////////////////////  // For get the index of an array

// const applainces = ["fan","light","AC","Tv","iron","fridge","motor"] 
// for(let elements in applainces){
//     console.log(elements);

// }
//////////////////////// For of loop ES6 ////////////////////////////   //For get the elements list from an array


// const applainces = ["fan","light","AC","Tv","iron","fridge","motor"] 
// for(let elements of applainces){
//     console.log(elements);

// }

////////////////////////// forEach() ////////////////////////////////////////

const applainces = ["fan" , "light" , "AC" , "Tv" , "iron" , "fridge" , "motor"] 

applainces.forEach(function(elements ,index,array){

console.log( "Name of applainces : " + elements + " Index of applaince : " + index + " Complete List Of applainces : " + array


);

});