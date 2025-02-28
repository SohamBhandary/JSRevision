//closures
// // asia koi bhi fn jo ek aur function ko retrunr karte hai wo ko closure bolte hai aur use kare parent uncyion ka koi varibale
// function counter(){
//     var count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
var fnc=counter();
fnc();
fnc();
function timer(){
    var a=12;
    return setTimeout(function(){
        console.log(a);

    },2000)
}
var ans= timer();