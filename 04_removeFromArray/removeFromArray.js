const removeFromArray = function(list, remove) {
    let index = list.indexOf(remove);
    list.splice(index, 1);
    return list;
};

console.log(removeFromArray([1,2,3,4], 2))

// Do not edit below this line
module.exports = removeFromArray;
