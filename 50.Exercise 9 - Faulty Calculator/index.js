let random = Math.random()
let a = prompt("Enter first number ")
let b = prompt("Enter Second number ")
let c = prompt("Enter operator ")

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
console.log(random)
if (random>0.1){
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval('${a} ${c} ${b}')}`)
}
else{
    c=obj[c]
    alert(`the result is ${eval('${a} ${c} ${b}')}`)
}