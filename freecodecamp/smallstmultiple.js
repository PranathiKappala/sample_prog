/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?*/

function lcm(a, b) {
  // console.log((a * b) / gcd(a, b));
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm
function gcd(a, b) {
  // console.log(ab);
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n) {
  let maxLCM = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
    console.log(maxLCM);
  }
  return maxLCM;
}

smallestMult(10)
