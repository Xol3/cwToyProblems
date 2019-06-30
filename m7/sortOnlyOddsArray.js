function sortArray(array) {
    // Return a sorted array.
    let loc = [];
    let val = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        loc.push(i);
        val.push(array[i])
      }
    }
    val.sort((a,b) => a-b);
    for(let j = 0; j < loc.length; j++){
      array[loc[j]] = val[j]
    }
    console.log(loc, val, array)
    return array
  }
  sortArray([ 5, 3, 2, 8, 1, 4, 11 ])
       //=> [1, 3, 2, 8, 5, 4, 11]