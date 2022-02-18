const add = function(a , b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(list) {
  let initial = 0
  for (const integer of list) {
    initial += integer
  };
  return initial;
};

const multiply = function(list) {
  let aInitial = 1;
  for (const x of list) {
    aInitial *= x;
  };
  return aInitial;
};


const power = function(num, power) {
  return num ** power;
	
};

const factorial = function(start) {
  let multiplyTo = 1;
  let i = 1;
  while (i <= start) {
    multiplyTo *= i;
    i ++;
  };

  return multiplyTo
}

console.log(factorial(0))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
