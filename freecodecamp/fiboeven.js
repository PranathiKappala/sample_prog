
/*
*/
function fiboEvenSum(n) {
  // You can do it!
 var a = 0;
  var b = 1;
  var c = 0;
  var sum =0;
  var fi = []

for(var i = 0; i < n; i++){
    c = a + b
    if(c<n){
     fi.push(c)
     a = b;
     b  = c;
  }
}

for(let x=0;x<fi.length;x++){
  if(fi[x]%2 == 0){
    sum += fi[x]
  }
}

return sum

}

console.log(fiboEvenSum(60));
