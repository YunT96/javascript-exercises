const repeatString = function(greeting, times) {
    let fullMessage = "";

    if (times < 0){
        console.log("ERROR");
        return("ERROR");
    }
    else{
        for (let i = 0; i < times; i++){
            fullMessage += greeting;
        }
        console.log(fullMessage);
        return fullMessage;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
