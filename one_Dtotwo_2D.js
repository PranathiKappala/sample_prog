let a = [1,2,3,4,5,6,7,8,9, 10]

var newArr = [];
while(a.length) newArr.push(a.splice(0,3));
console.log(newArr)
//splice modifies directly original array
