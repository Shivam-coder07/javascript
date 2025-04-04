const aboutBooks=[
    { 
        title :"book1" , genre: "friction", publish:1981        
    },
    { 
        title :"book2" , genre: "history", publish:1982
       
    },
    { 
        title :"book3" , genre: "friction", publish:1989
        
    },
    { 
        title :"book4" , genre: "history", publish : 1987
        
    }
]
const userBooks=aboutBooks.filter(  (bk)  => bk.genre === "history")
//console.log(userBooks);


// Map
 const myNumbs=[1,2,3,4,5,6,7,8,9,10]
// if we are using brackets in arrow function then we have to use return word
 //const num=myNumbs.map(  (myNumbs) => { return myNumbs+10})

 const num=myNumbs.map(  (myNumbs) => myNumbs+10)
 //console.log(num);

 // chainnig = using one or more method more than one

  const myNumbs1=[1,2,3,4,5,6,7,8,9,10]
  const num1=myNumbs1.map(  (myNumbs1) => myNumbs1+10)
                     .map((myNumbs1) => myNumbs1*10)
                     .filter( (myNumbs1) => myNumbs1>=150 )
console.log(num1);

// reduce method
const newNumb=[1,2,3,4]
const total=newNumb.reduce( function (acc, curval) {
console.log(`the accumulated value ${acc} and the the current value${curval}`);
return acc+curval
},3)
console.log(total);  

// redure method using arrow function
// const total=newNumb.reduce( function (acc, curval) => acc+curval,0)

                     