const reverseString = function(str) {
   let strArray = str.split("");
   strArray.reverse();
   str = strArray.join("");
   return(str);
   //For future reference, able to just return str.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
