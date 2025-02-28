//this call apply bind
// this ki value baar baar badal sakti hai alag a;lag conditions mein.
// value of this:-
//global->window
console.log(this);
// function->window
function abcd(){console.log(this)}
abcd();
//method->object
// var obj={{name:function(){}
//     console.log(this)
// }
// }
// fnc insdie method (es6)
var obj3={
    sayName:()=>{
        console.log(this);
    }
}
obj3.sayName;

//constructor-> new blank object
function add(){
    console.log(this);
}
const ans = new add();
// event listener-> that element jispe evenet lostener laga ho
