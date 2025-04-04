const array = [1,5,6,9,4,7]
console.log(array[2]);
 
const array1 = new Array(1,5,8,9,55)
console.log(array1[2]);

// push method in array
array.push(69)     //to add value at the end
console.log(array);
  
array.pop()          // to delete the last value 
console.log(array);  

// unshift() this is used to add value at starting. in paranthese () we give the value which we are adding in the array
// it is used to remove the value from starting

// includes() used to check whethere a value is present or not in array
// indexOf()check value at the index

// slice  splice
const arr2= array.slice(1,3)
console.log(array);
console.log("b",arr2);

//splice it include last value and manipulate the array
const arr3 = array.splice(1,3)
console.log("c",arr3);
console.log(arr3);