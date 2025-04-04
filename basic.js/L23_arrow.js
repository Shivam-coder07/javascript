const user={
    username:"Shivam",
    age : 20,

   welcomeMessage: function(){
    console.log(`${this.username} , welcome to the website`);
                        // this tells about current context
   }
}

user.welcomeMessage()


//Arrow function
const chai= () => {
    let username="Shivam"
    console.log(this);
    
}
 chai()
 // one way to define Arrow function
//  const twoNum =(num1,num2) =>{
//     return num1+num2
//  }

 
// another way to define Arrow function
 //#1  const addTwo =(num1,num2) => (num1+num2)   this is also correct
const addTwo =(num1,num2) => num1+num2      
                                            // if {} using these return statement is used.
 console.log(addTwo(5,6));                    // if{} is not used then no need to use return statement. 
 