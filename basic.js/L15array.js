const arr1=["time","pass","krna","ok"]
const arr2=["kl","milte","hai","bhai"]
// arr1.push(arr2)
// console.log(arr1);
// const arr3 =  arr1.concat(arr2)
// console.log(arr3); 
// spread method
const arr4= [...arr1,...arr2]
console.log(arr4);

const arr5 =[1,6,7,45,[78,69,89,78,],4,[45,5,[47,75,56]]]
const arr6 = arr5.flat(Infinity)  // flat is used to print all sub array in single array and  
console.log(arr6);                // infinity is used to print all the sub array bcoz in-place of infinity we give how many sub array we want to print in single line


// make string to an array
console.log(Array.from("SHIVAM"));
