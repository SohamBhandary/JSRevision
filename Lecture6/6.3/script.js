// protypal inheritance

function makeHuman(name,age){
    this.name=name;
    this.age=age;
}
makeHuman.prototype.chacha="chacha of all"
const human1 = new makeHuman("Soham",25);
const human2 = new makeHuman("SohamB",22);
console.log(human1.name);
console.log(human1.age);
console.log(human1.chacha);
console.log(human2.name);
console.log(human2.age);
console.log(human2.chacha);

