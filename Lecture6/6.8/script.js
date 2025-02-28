// custom events
const evt= new Event("Chacha")
document.querySelector("button")
.addEventListener("chacha",function(){
    alert("event hua");
})
document.querySelector("button").dispatchEvent(evt)