// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
  //TODO 
  // convert the str to arr
  var arr = braces.split("");
  // create stack
  var stack = [];
  for(let i = 0; i < arr.length; i++){
    // check if its a parenthesis
    if(isParanthesis(arr[i])){
    // if its open parenthesis 
      if(isOpenParanthesis(arr[i])){
        //push it to a stack 
        stack.push(arr[i])
      // else stack is empty there is mismatch return flase
      }else{
      if(stack.length === 0){
        return false;
      }
      //pop from from stack as its a match 
      let top = stack.pop()
      //console.log(top, " rep ", arr[i])
        if(!match(top, arr[i])){
        // it its not a match return false
        return false;
        }
      }
    }
  }
  if(stack.length > 0) {
    return false
  }
  return true
}
function match(topStack, closeParanthesis){
  if(topStack === "{"){
    if(closeParanthesis === "}"){
      return true
    }
  }else if(topStack === "["){
    if(closeParanthesis === "]"){
      return true
    }
  }else if(topStack === "("){
    if(closeParanthesis === ")"){
      return true
    }
  }
  return false
}

function isOpenParanthesis(char){
  let str = "{[(";
  if(str.indexOf(char) > -1){
      //console.log(str.indexOf(char))
    return true 
  }
  return false
}

function isParanthesis(char) {
  let str = '{}[]()';
  //check index of char if its bigger then 0 its there
  if (str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}
//match("{", "]")
validBraces("{{}[]")

// ExtraCredit https://medium.com/@robhitt/balance-parenthesis-in-javascript-60f451a00c4c