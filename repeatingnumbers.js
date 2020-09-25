let arr=[1,2,3,3,3]
var b=0
for(let i=0;i<arr.length;i++){
   if(arr[i]==arr[i+1]){
   b=b+1
}
// console.log(arr[i],b);
}
function count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                // console.log(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        // console.log(current + ' comes --> ' + cnt + ' times');
    }

}
// count()
const array = ["a", "a", "b",'b']
const result = { }

for (let i = 0; i < array.length; i++) {
  console.log("--------->",result[array[i]] || 0)
  result[array[i]] = (result[array[i]] || 0) + 1
  console.log(result[array[i]]);
}
console.log("========",result);
Object.keys(result).map(key => ({ [key]: result[key] }))
console.log(result);
