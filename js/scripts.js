// Back End
var validateXnary = function (str, base){
  if (typeof base === "number" && base<11){
    // we don't have to use letters yet
    var validNumbersArray = [];
    for (var i=0; i<base; i++){
      validNumbersArray.push(i);
    }
    var counter = 0;
    for(var i = 0; i<str.length; i++){

      if(validNumbersArray.indexOf(parseInt(str[i]))>-1){
        counter ++;
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

var convertXnaryToInt = function(str, base){
  // var inputInt = parseInt(str);
  if(!parseInt(str)){
    // currently also throws this if str is just "0"
    alert("Please enter a integer number");
    return parseInt(str);
  }
  var n = str.length;
  var answer = 0;
  for (var i=n-1; i>=0; i--){
    // console.log("i is " + i);
    // console.log("value in that slot is " + (Math.pow(2,n-i-1) * parseInt(str[i])));
    answer += Math.pow(base,n-i-1) * parseInt(str[i]);
  }
  // console.log("answer is " + answer);
  return answer;
}

// console.log(convertXnaryToInt("hi",2));
// console.log(convertXnaryToInt("0",2));
// console.log(convertXnaryToInt("1",2));
// console.log(convertXnaryToInt("10",2));
// console.log(convertXnaryToInt("11",2));
// console.log(convertXnaryToInt("100",2));
// console.log(convertXnaryToInt("hi",3));
// console.log(convertXnaryToInt("0",3));
// console.log(convertXnaryToInt("1",3));
// console.log(convertXnaryToInt("10",3));
// console.log(convertXnaryToInt("11",3));
// console.log(convertXnaryToInt("100",3));



// Front End
$(function(){

});
