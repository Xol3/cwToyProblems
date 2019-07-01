// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth-Warrior") // returns "TheStealthWarrior"


function toCamelCase(str){
  let result = str.split("").map(
    x=>{if(x==="_"||x==="-"){
      return ""
    }else{
      return x
    }
    })
    for(let i = 0; i < str.length; i++){
      if(result[i]=== ""){
        result[i+1]= result[i+1].toUpperCase();
      }
    }

  return result.join("");
}