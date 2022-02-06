const leapYears = function(year) {
     if (year % 4 == 0 && year % 100 != 0) {
         return true;
     }
     else if (year % 400 == 0 && year % 100 == 0) {
         return true;
     }
     else {
         return false;
     }
}

console.log(leapYears(1996))
console.log(leapYears(1997))
console.log(leapYears(34992))
console.log(leapYears(1900))
console.log(leapYears(1600))
console.log(leapYears(1700))
// Do not edit below this line
module.exports = leapYears;
