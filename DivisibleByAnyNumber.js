// for (var i = 1; i <= 100; i++) {
//     if ( i % 3) {
//     console.log("this number is divisible by 3");
//     } else {
//     console.log(i);
//     }
//     }
    /////////////// Another Way to Do it ///////////////////

    function Tnum (a){
        if (a%3 ==0){
        var user = alert(`${a} is divible by 3` )
        return user ;
        
        }{
        return alert(`${a} is not divible by 3`) ;
        }
        }
        Tnum(90);