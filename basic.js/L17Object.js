const jsUser ={}
jsUser.id="123shiv"
jsUser.name="Shivam"
jsUser.isloggedIn= false
console.log(jsUser);


const regularUser={
    email:"shivam@123",
    fullname:{
        userfullname:{
            firstname:"Shivam",
            lastname:"Yadav"

        }
    }

}
console.log(regularUser);
console.log(regularUser.fullname.userfullname.lastname); // particular data print krna hoto

//
const obj1= {1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// // Object operator is used less 
// // const obj3= Object.assign(obj1,obj2) // assign function is used to single object
// // console.log(obj3);
// // sperate operator is more often used
// const obj4= {...obj1,...obj2}
// console.log(obj4);

console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));

// Destructure 
const course={
    courseName:"js in hindi",
    price:"338",
    courseInstructor:"hitesh choudary"
}
 
const {courseInstructor : hero}=course    // it is used to give shorter name 
console.log(hero);
