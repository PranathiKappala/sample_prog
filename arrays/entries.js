var a = ['a', 'b', 'c'];
var iterator = a.entries();

 console.log(iterator);
 for (const [index, element] of a.entries()){
  console.log(index, element);
}
for (let e of iterator) {
  console.log(e);
}
