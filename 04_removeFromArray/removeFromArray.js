const removeFromArray = function(array, ...num) {
   return array.filter(item => !num.includes(item));
};
//Using arrow function expression =>
//the item in this code works like [i] in a traditional loop

// Do not edit below this line
module.exports = removeFromArray;
