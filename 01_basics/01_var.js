const accountId = 13333
let accountEmail="exa,ple@gmsil.com"
var accountPass ="1234"
accountCity ="Solapur"
let accountState; //use let if their is possiblity of change state
/*
prefer not use var because of issue in block scope and functional scope
*/ 
// accountId =2 //not allowed

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState])