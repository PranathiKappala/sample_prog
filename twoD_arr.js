
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
   // convert current inventory (arr1) to an one-dimensional array
   //var inventory = Array.prototype.concat.apply([], arr1)
   var inventory = [].concat.apply([], arr1)
   //apply appends to existing array
   console.log('inventory....', inventory);
  // loop through new delivery (arr2)
  for(var i=0; i<arr2.length; i++){
    const item = arr2[i][1]
    const quantity = arr2[i][0]
    // check if item already exists in inventory
     const position = inventory.indexOf(item)
    if(position !== -1){
      console.log(position);
      console.log(arr1);
      // console.log(arr1[position][0]);
      const row = Math.floor(position/2)
      console.log("row",arr1[row][0],quantity);
      arr1[row][0] += quantity
      continue;
    }
    // // alien item: add to inventory
    arr1.push([quantity, item])
  }
  // console.log(arr1);

  // sort inventory in alphabetical order
  arr1.sort((previous, next)=>(previous[1]>next[1])?1:-1)
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
var result = updateInventory(curInv, newInv);
console.log(result)
// var a = ["ak,","csdef",'d','fnmm','e', 'j' ,"ab" ]
// var b = [1,10,5,2,4,10,12,3,9]
// console.log(b.sort((a,b)=>(b-a)))
// console.log(a.sort((previous, next)=>(previous>next)?1:-1))
