/*
Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?*/

function largestPrimeFactor(number) {
  // Good luck!
   var primeArray = [],
    isPrime;

//find divisors starting with 2

for(let i = 2; i < number; i++){
  if (number % i==0) {

   if(i/2 < 2){
     primeArray.push(i)
   }
    //check if divisor is prime
    for(var j = 2; j <= i/2; j++) {
     // console.log(i,j);
      if(i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if the divisor is prime

    if (isPrime == true) {
      // console.log(i);
      //divide integer by prime factor & factor store in array primeArray
      number /= i
      primeArray.push(i);
    }
  }

}



var largest = Math.max(...primeArray);
return largest
}


console.log(largestPrimeFactor(13175))
