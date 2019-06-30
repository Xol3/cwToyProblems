// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// function createPhoneNumber(numbers){
//     let str = numbers.join("");
//     return "("+str.substring(0,3)+") "+str.substring(3,6)+"-"+str.substring(6) 
//   }

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }


//   function createPhoneNumber(numbers){
//     let phoneNum =["(",1,2,3,")"," ",6,7,8,"-",10,11,12,13];
//     for(let i = 0; i < numbers.length; i++){
//       if(i === 1){
//         phoneNum[1] = numbers[0]
//       }else if(i === 2){
//         phoneNum[2] = numbers[1]
//       }else if(i === 3){
//         phoneNum[3] = numbers[2]
//       }else if(i === 4){
//         phoneNum[6] = numbers[3]
//       }else if(i === 5){
//         phoneNum[7] = numbers[4]
//       }else if(i === 6){
//         phoneNum[8] = numbers[5]
//       }else if(i === 7){
//         phoneNum[10] = numbers[6]
//       }else if(i === 8){
//         phoneNum[11] = numbers[7]
//       }else if(i === 9){
//         phoneNum[12] = numbers[8]
//       }else{
//         phoneNum[13] = numbers[9]
//       }
//     }
//     return phoneNum.join("")
    
//   }