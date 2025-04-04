// for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// const myArray=["army","airforce","navy"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// // while loop

// let arr=["flash","ant-man","dhoni","virat"]
// let myArr=0
// while (myArr<=arr.length) {
//     console.log(`the heroes are ${arr[myArr]}`);
//     myArr++
// }

// // do while
// let score=1
// do {
//     console.log(`the score is ${score}`);
//     score++
// } while (score<=10);


// // for of loop
//   const arr1=[1,5,6,9,4]
//   for (const num of arr1) {
//     console.log(num);
    
//   }
//    let greetings="radhe radhe"
//    for (const greet of greetings) {
//         console.log(greet);
        
 //  }

 // for in loop is used for objects and many more...  
 const myObject ={
     js:"javascript",
     cpp:"c++",
     rb:"ruby",
     swift:"swift by apple"

 }
 for (const key in myObject) {
   console.log(`the keys are ${key} and values are ${myObject[key]}`);
    }
 // for each loop
 let coding=[
    { language:"javascript",
      languageFileName:"js"
 },
 { language:"cpp",
    languageFileName:"c++"
},
{ language:"react",
    languageFileName:"rt"
}
]
coding.forEach(  (item) => {          // for each k andar kuch bhi naam le sakte hai(item).
    console.log(item);
    
} )
 