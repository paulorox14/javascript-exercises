const sumAll = function(start, final) {
    if (typeof start != 'number' || typeof final != 'number') {
        return "ERROR"
    }
    else if (start < 0 || final < 0) {
        return "ERROR"
    }
    else {
        let i = start;
        let total = 0;
        if (start < final) {
            do {
                total = total + start;
                i ++;
                start ++;
            }
            while (i <= final);
        }
        else if (start > final) {
            do {
                total = total + start;
                i --;
                start --;
            }
            while (i >= final);
        }

        return total
    }
}

console.log(sumAll(1, 4000))
console.log(sumAll(123, 1))
console.log(sumAll(1, "90"))
console.log(sumAll(-10, 1))

// Do not edit below this line
module.exports = sumAll;

// 1 + 2 + 3 + 4 = 10
