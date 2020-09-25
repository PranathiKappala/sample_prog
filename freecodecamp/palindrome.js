/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.*/


function largestPalindromeProduct(n) {
    // console.log([...Array(2)]);
    let maxStr = [...Array(n)].reduce((a, c) => a+=9,'')
    let max = Number(maxStr)
    let min = (max+1)/10

    let res = []

    for(let i=max; i>=min; i--){
      for(let j=max; i>=min; j--){
          let num = i*j;
          let numReverse = [...String(num)].reverse().join("");
          if(num == numReverse){
            res.push(num)
            break;
          }
      }
    }
    console.log(...res);
    return Math.max(...res)
  }

  var result = largestPalindromeProduct(2);
  console.log(result)
