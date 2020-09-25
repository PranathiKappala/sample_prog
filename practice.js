let a = [1,2,3,3,4];

let res = {}

for(let i=0;i<a.length;i++){
     res[a[i]]= (res[a[i]] || 0) + 1;
}
// console.log(res);
let self = a
let unique= a.filter(function(item,pos) {
  // console.log(item,self);
    return self.indexOf(item) == pos;
})
// console.log(unique);
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
function updateInventory(arr1,arr2){
  var inventory = [].concat(...arr1)
  for(let j=0;j<arr2.length;j++){
    let pos = inventory.indexOf(arr2[j][1]);
    const quantity = arr2[j][0]
    if(pos !== -1){
        console.log(pos);
        const row = Math.floor(pos/2)
        console.log("row",row,arr1[row][0],quantity);
        arr1[row][0] += quantity
        continue;
    }
    else{
      // console.log(arr2[j]);
    arr1.push(arr2[j])
  }
    // console.log(arr1)
  }
  return arr1
}
var result = updateInventory(curInv, newInv);


//nthprime
function nthPrime(n){
  let primes = [2]
  let num = 3,
    isPrime = true;

  //Looping until primes array is equal to n
  while (primes.length < n) {
    // console.log(num);
    //All the primes numbers of a number is always <= its square root
    let max = Math.ceil(Math.sqrt(num));
    for (let i = 0; primes[i] <= max; i++) {
      console.log(primes[i]);
      if (num % primes[i] == 0) {
        // console.log(primes[i]);
        //Looping till we find the prime
        isPrime = false;
        break;
      }
    }

    //if Prime found, push it to the array
    if (isPrime) primes.push(num);
    isPrime = true;

    //An optimization technique, since we know of all even numbers only 2 is a prime number, we can skip the rest
    num += 2;
  }

  //Returning the last number
  return primes[primes.length - 1];
}
nthPrime(2);






function leastMultiple(n){
  let maxLCM =1;
  for(let i=2;i<=n;i++){
    maxLCM = LCM(maxLCM,i);
  }
    return maxLCM;
}

function LCM(a,b){
  return a*b/gcd(a,b)
}

function gcd(a,b){
  if(b === 0) return a;
  return gcd(b,a%b)
}

console.log(leastMultiple(10))
