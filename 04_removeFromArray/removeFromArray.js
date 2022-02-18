const removeFromArray = function(...args) { //USE THE REST OPERATOR
    const array = args[0]; //THE ARRAY IS THE FIRST ARGUMENT
    const newArray = []; //MAKES A NEW EMPTY ARRAY

    array.forEach((item) => { //FOR EACH ITEM IN THE ARRAY
        if (!args.includes(item)) { //IF THE ITEM ISN'T ONE OF THE REST ARGUMENTS
            newArray.push(item); //PUSH THE ITEM TO NEW ARRAY
        }
    })

    return newArray //RETURN NEW ARRAY
}

console.log(removeFromArray([1,2,3,4], 2, 4))
console.log(removeFromArray([1, 2, 3, 4], 7))

// Do not edit below this line
module.exports = removeFromArray;
