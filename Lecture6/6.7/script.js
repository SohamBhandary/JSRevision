// try catch
function divide(a,b){
    try{if(b==0){
        throw Error("Koi garbar hoi")

    }
console.log(a/b)}
    catch(e){
        console.log(e);
    }
}
divide(12,0);