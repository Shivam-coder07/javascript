// Global scope = code out side the block of code is called global scope
let a=300
 
// block scope = code inside the the block of condition is called block scope
if(true){
     let a=10
     const b=30
     console.log("Inner",a);
}
 console.log(a);
   

 // Closure == andar ka function  bahr k function ko access kr sakta hai but bahr wala andar k function ko nhi
 function one(){
    const userName="Shivam"
      function two(){
        const webSite ="youtube"
        console.log(userName);
        
      }
      two()
   // outside function does not access inside function   
      console.log(webSite);
 }
 one()

 