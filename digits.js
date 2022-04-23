function sumdigit(str){
var num=0;
for(let i=0; i<str.length;i++){
    if(/[0-9]/.test(str[i]))
    num+=parseInt(str[i])
}
return num;
}
console.log(sumdigit("1234"))