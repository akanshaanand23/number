var cp= prompt("enter a cost price")
var sp = prompt("enter a selling price")
var amt
if(sp>cp){
    amt =sp-cp
console.log("Profit:"+amt)
}else if(cp>sp){
    amt=cp-sp
    console.log("Loss:"+amt)
}