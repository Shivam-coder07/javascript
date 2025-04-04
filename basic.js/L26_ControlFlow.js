// if

// operator <,>,<=,>=,==,===(this is used to check value and datatype too)

// const temp =45
//  if( temp== 45){
//     console.log("perfect temp");
    
//  }
//  else{
//     console.log("not perfect");
    
//  }


const userLoggedIn=true
const userEmail= true
const userLoggedGoogle= false
const userLoggedEmail= true
const age=156
if(userLoggedIn && userEmail && age>18 ){
    console.log("Logged in");
    
}
else if(userLoggedEmail || userLoggedGoogle){
    console.log("logged in");
    
}
else{
    console.log("logged out");
    
} 


// Switch
const month = 4
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;    
    case 4:
        console.log("april");
         break;
    default:
        console.log("no a month");
        
        break;
}

// falsy value
//false , 0, -0, BigInt 0n, NaN , undefined, null, ""

// truthy value
//"0",'false'," ",[],{},function(){},

// nullish coalescing operator(??) : null,undefined
let val1;
// val1= 5?? 10
// val1= null?? 10
// val1= undefined ?? 5
// val1= undefined ?? 10 ?? 10
val1= null ?? undefined
console.log(val1);

