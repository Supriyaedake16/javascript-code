//const tinderUser =new Object()
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name="sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email:"supriya@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3 ={obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2} //mostly this is used to spread 

//console.log(obj3);

const users =[
    {
        id:1,
        email:"supriay@gmail.com",

    },
    {
        id:1,
        email:"supriay@gmail.com",

    },
    {
        id:1,
        email:"supriay@gmail.com",

    },
    {
        id:1,
        email:"supriay@gmail.com",

    },

]
users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));




//note:json is object   some time we get api in array formate also
// 1.for examples use -- search on goolge randomme api
//2.to understand take one api from that and 
//3. search json formattor on google paste and click on formate and modifier there
//4. convert in tree formate
const course ={
    coursename:"js learning",
    price:"999",
    courseInstructor:"hitesh"

}
const {courseInstructor: instructor}= course

//console.log(courseInstructor);
console.log(instructor);
