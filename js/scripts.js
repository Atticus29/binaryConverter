// Back End
var validateXnary = function (str, base){
  if (typeof base === "number" && base<11){
    // we don't have to use letters yet
    var validNumbersArray = [];
    for (var i=0; i<base; i++){
      validNumbersArray.push(i);
    }
    // console.log(validNumbersArray);
    var counter = 0;
    for(var i = 0; i<str.length; i++){
      // console.log("validNumbersArray is " + validNumbersArray);
      // console.log("str[i] is " + str[i]);
      if(validNumbersArray.indexOf(parseInt(str[i]))>-1){
        counter ++;
        // console.log("counter is now " + counter);
      }
    }
    if(str.length===counter){
      return true;
    }else{
      return false;
    }
  }
}
// console.log(validateXnary("12122", 3));
// console.log(validateXnary("12322", 3));

var convertXnaryToInt = function(str){
  // var inputInt = parseInt(str);
  if(!parseInt(str)){
    alert("Please enter a integer number");
    return parseInt(str);
  }
  var n = str.length;
  var answer = 0;
  for (var i=n-1; i>=0; i--){
    // console.log("i is " + i);
    // console.log("value in that slot is " + (Math.pow(2,n-i-1) * parseInt(str[i])));
    answer += Math.pow(2,n-i-1) * parseInt(str[i]);
  }
  // console.log("answer is " + answer);
  return answer;
}

// console.log(convertXnaryToInt("hi"));
// console.log(convertXnaryToInt("0"));
// console.log(convertXnaryToInt("1"));
// console.log(convertXnaryToInt("10"));
// console.log(convertXnaryToInt("11"));
// console.log(convertXnaryToInt("100"));



// Front End
$(function(){

});
