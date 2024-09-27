//let myDate =new Date()   // date
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);


//let myCreatedDate =new Date(2024,0,23)//month is start from 0 in js
//console.log(myCreatedDate.toDateString()); //--with the help of toDateString  we can clearly undersatnd if we dont use this then hard to understand 



let myCreatedDate =new Date("01-14/2024")
//console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp =Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());