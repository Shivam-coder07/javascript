 // to create a function
 function myName(){  
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
    }
 
// to call function
//myName()   

function addTwoNumbers(num1,num2){
    let result= num1+num2
     return result
    }
 const  result=addTwoNumbers(6,8) 
 console.log(result);

 // 12 
 function loginUserMessage(username){
    if(!username){            // !(not) is used to show username equal to undefined. 
        console.log("Please enter the login details");
        return      
    }
          return`${username} user just logged in`
 }
  console.log(loginUserMessage("Shivam"));
  console.log(loginUserMessage());
  
// rest operator
 function calculatorCartPrice(...num1){      // three dots is used to called rest operator here
    return num1                            // they are used to put multiple values in single array using one parameter in function define.
 }
 console.log(calculatorCartPrice(23,8651,78,6654,78787));
   
 function calculatorCartPrice(val1,val2,...num1){  
    return num1         // val1(23), val2 (568) and rest are print in num1 
 }
 console.log(calculatorCartPrice(23,568,6888,474,47));
    

// array input
const myArray =[255,688,8989,454]
function secondValue (myArray){
   return myArray[1]
}
console.log( secondValue (myArray));
