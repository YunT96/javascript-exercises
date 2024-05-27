const sumAll = function(intOne, intTwo) {

    if (typeof intOne != "number" || typeof intTwo != "number" || intOne < 0 || intTwo < 0){
        return('ERROR')
    }
    
    if (intOne > intTwo) {
        // Swap intOne and intTwo
        let temp = intOne;
        intOne = intTwo;
        intTwo = temp;
    }

    let sum = 0;
    for (let i = intOne; i <= intTwo; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
