const palindromes = function (string) {
    const removeSpace = string.replaceAll(" ", "") 
    const removeComma = removeSpace.replaceAll(",", "")
    const removeExclamation = removeComma.replaceAll('!', "")
    const removeDot = removeExclamation.replaceAll('.', "")
    const lowerCase = removeDot.toLowerCase()

    let splitString = lowerCase.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    if (lowerCase === joinArray) {
        return true
    }
    else {
        return false
    };
};

console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
