console.log(__dirname);
console.log(__filename);

global.myGlobalVar = "This is a global variable"; 

function printGlobal() {
    console.log(global.myGlobalVar); 
}

setTimeout(() => {
    printGlobal(); 
}, 1000);
var i = 0; 
setInterval(() => {
    console.log("Interval running...",i);
    i++ 
}, 2000);
