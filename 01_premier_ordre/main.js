function log  (value) {
document.getElementById("output").textContent += value + '\n'
} 

function applyTwice(func, value){
    func(value);
    func(value+ '    BIS');
}


function makeCounter(){
    let count  =  0 
    return () => {
        count = count +1;
        log(count);
        return count;
    }
}





function sayHello( name){
    log( 'Hello'  +  name);
}

function sayCiao( name){
    log( 'Ciao'  +  name);
}


log("execice 1 ")
applyTwice(sayHello, "World")


let func =  makeCounter()
log("execice 2 ")
func()
func()
makeCounter()()

log("execice 3 ")
var tab =  [
    sayHello,
    sayCiao
]
tab.forEach(fn => fn('Tutti'))





