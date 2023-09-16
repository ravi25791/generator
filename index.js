/* ------- A generator function can pause and resume of code execution ------- */
function* generatorFun(){
    let id=100;
    while(true){
    id++
    yield id;
    }
}

let gen=generatorFun()

function generateID(){
    document.getElementById("newid").innerText=gen.next().value;
}