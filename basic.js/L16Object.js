
const symb =Symbol("key1")

const user= {
    name:"Shivam",
    "full name":"Shivam yadav",
    age:55,
    [symb]:"key1",   // for symbol []is used in key to make it symbol otherwise it take it as string
    email:"shivamyadav0631@gmail.com",
    location:"Fatehpur",
    isLogged: false,
    lastLoginDays:["Monday","Friday"]
}
console.log(user.email);    // two ways to print o/p in object
console.log(user["email"]); // when key is given in string " " then only []this method is used to print o/p
console.log(user["full name"]);
console.log(user[symb])

// to change value of key
user.email="king@94848.com"
console.log(user.email);

// FUNCTION
user.greeting = function(){
    console.log("Shivam");
    }
 console.log(user.greeting); 
    