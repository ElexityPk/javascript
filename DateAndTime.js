// 1. Write a JavaScript program to display the current day and time in the following format.//////

////////////////////// Explanation ///////////////////////////////
// The getDay() method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

// The getHours() method is used to get the hour for a given date, according to local time. The value returned by getHours() is an integer between 0 and 23.

// The getMinutes() method is used to get the minutes in the specified date according to local time. The value returned by getMinutes() is an integer between 0 and 59.

// The getSeconds() method is used to get the seconds in the specified date according to local time. The value returned by getSeconds() is an integer between 0 and 59.

// AM and PM : AM stands for 'ante meridiem', which means 'before noon' in Latin, while PM stands for 'post meridiem', which means 'after noon' in Latin.
// 12-Hour Periods : Nowadays most clocks are 12-hour clocks â€“ they divide the 24 hours in a day into two 12-hour periods.
// Ante meridiem: Before noon - Between midnight (0:00) & noon (12:00)
// Post meridiem: After noon Between noon (12:00) & midnight (0:00)


var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);



///////////////////////////// Another Way ////////////////////

const getCurrentTime = () => {
    const date = new Date();
    const timeConvention = `${date.getHours() < 12 ? 'AM': 'PM'}`
    const hours = `${date.getHours().toString().padStart(2, '0')}`
    const minutes = `${date.getMinutes().toString().padStart(2, '0')}`
    const seconds = `${date.getSeconds().toString().padStart(2, '0')}`
    return `${hours} ${timeConvention} : ${minutes} : ${seconds}`
    }
    
    const getCurrentDay = () => {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = date.getDay();
    return `Today is : ${days[day]}`;
    }
    console.log(getCurrentDay());
    console.log(getCurrentTime());

    /////////////////////////////////  3rd Way ///////////////////////////////


const today = new Date();
const day = today.getDay();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday']
console.log(`Today is: ${dayList[day]}.`)

const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

if (hour >= 12 && hour <= 23) {
prepand = 'PM';
} else {
prepand = 'AM';
}

console.log(`Time is ${hour}: ${minutes}: ${seconds} ${prepand}`);


/////////////////////////////// Currren Date and time //////////////////////////////


// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);