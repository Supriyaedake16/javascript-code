//singletone
//Object.create


//object literals
const mySym =Symbol("key1")
const jsUser = {
    name:"supriya",
    "fullname":"supriya edake",
    [mySym]:"key1",
    age:25,
    location:"Solapur",
    email:"supriya@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["fullname"])
//console.log(jsUser[mySym])

jsUser.email="hitesh@chatgpt.com"
//Object.freeze(jsUser) ---keep this in commant otherwise other function is not going to run
jsUser.email="hitesh@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log('Hello Js user,${this.name}');
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());