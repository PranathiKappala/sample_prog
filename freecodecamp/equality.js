function testStrict(val) {
  if (val === 10 || val ==="7") { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
//=== strictly checks 7(integer) is equal to "7"(string) it does not perform type conversion
console.log(testStrict(7))


function testEqual(val) {
 if ( val == "7") { // Change this line
   return "Equal";
 }
 return "Not Equal";
}
//== checks after type conversion of "7"(string into integer)
console.log(testEqual(7))
