function repeatString(string, num) {
    try {
        let something = string.repeat(num);
        return something;
    }
    catch(err) {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = repeatString;
