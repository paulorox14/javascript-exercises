const ftoc = function(num) {
  let fahrenheit = (num - 32) * 5 / 9;
  let fahrenheitRounded = Math.round(fahrenheit * 10)/10;
  return fahrenheitRounded;
};

const ctof = function(num) {
  let celcius = num / 5 * 9 + 32;
  let celciusRounded = Math.round(celcius * 10) / 10;
  return celciusRounded;
};

console.log(ftoc(32))
console.log(ctof(0))
console.log(ftoc(-32))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
