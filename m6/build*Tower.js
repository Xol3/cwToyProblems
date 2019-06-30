// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

function towerBuilder(nFloors) {
    // build here
    let piramid = [];
    for(let i = 0; i < nFloors; i++){
      let tempStr = [];
      for(let j = 0; j < nFloors; j++){
        if(j === 0){
          tempStr.push("*")
        }else if(j<=i){
          tempStr.push("*")
          tempStr.unshift("*")
        }else{
          tempStr.push(" ")
          tempStr.unshift(" ")
        }
      }
      console.log("test")
      piramid.push(tempStr.join(""))  
    }
    return piramid
  }
  
  towerBuilder(3)

// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }