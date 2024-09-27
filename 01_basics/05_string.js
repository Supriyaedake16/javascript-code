const gameName =new String ("supriya-ed");/*by using this we can use menthods*/
//console.log("supriya");
console.log(gameName.indexOf('i'));

console.log.apply(gameName.toUpperCase());

console.log(gameName.charAt(2));

const newString =gameName.substring(0,4) //newString slice
console.log(newString);

const anotherString=gameName.slice(-8,3) //anotherString Slice
console.log(anotherString);

const newStringOne =" youtube "
console.log(newStringOne);
console.log(newStringOne.trim()); //TRIMSTRAT AND TRIM END ALSO avaliable


const url ="https://www.youtube%20.com/"
console.log(url.replace('%20','_'))
console.log(url.includes('sunder')) //run this and check is it true or false 

console.log(gameName.split('-'));