// age = () => {
//     var currentDate = new Date();
    
//     var Dat = currentDate.getDate();
//     console.log(Dat);
//     var day = currentDate.getDay();
//     console.log(day);
    
//     var month = currentDate.getFullYear();
//     console.log(month);
    
//     var dob = 1992;
//     var age = month - dob;
//     if (isNaN) {
//     // console.log(age);
//   
//     };
//     age();

///////////////////////// CalculateAge /////////////////////



function calculate_age(dob) {
    var diff = Date.now() - dob.getTime();
    console.log(diff);
    var db = dob.getTime();
    var d = Date.now();
    console.log("its date of berth " + db);
    console.log("its Date.now(); "+ d);
    var ageDate = new Date(diff);
    console.log("its age Date "+ ageDate );
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    console.log(calculate_age(new Date(1988, 11, 07)));