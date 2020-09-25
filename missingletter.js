let arr=[1,2,3,4]
let a=arr.reduce((a,b)=>a+b)
let b=arr.length+1
let c=(b*(b+1))/2
console.log(c-a);
// for(let i=0;i<arr.length-1;i++){
//   if(arr[i]+1 == arr[i+1]){console.log("ok")}
//   else{console.log("missing nos :",arr[i]+1)}
// }

//it works only if one letter is miising
