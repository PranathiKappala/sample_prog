let array1=[1,2,4,8]
let array2=[3,4,6,2,7]

// for(let i=0;i<array1.length;i++){
//   if(array1.indexOf(array2[i])=== -1){
//   console.log(array1[i]);
//   }

//   item=array2[i]
// const position = array1.indexOf(item)
//
// if(position !== -1){
//   console.log(array2[i]);
// }
// else{
// array1.push(array2[i])
//
// }
// }
// for(let i=0;i<array2.length;i++){
// if(array2.includes(array1[i]))  {
// console.log(array2[i]);
// console.log(array1[i]);
// }
// }
// console.log(array1);
arr1 = array1.filter(val => !array2.includes(val));
arr2 = array2.filter(val => !array1.includes(val));
var inventory = [].concat(arr1,arr2)
console.log(inventory);
common = array1.filter(val=>array2.includes(val))
console.log(common);
