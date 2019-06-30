function queueTime(customers, n) {
    //TODO
    //create the tills
    let till = [];
    for(let i = 0; i < n ; i++){
      till[i]=0
    }
    
    //fill them with the frist customers
    for(let j = 0; j < till.length; j++){
        till[j] = customers[j]
    }
    //console.log(till, customers)
  
    //add to the smallest till the next customer
    for(let j = till.length; j < customers.length; j++){
      till[till.indexOf(Math.min.apply(null,till))] = till[till.indexOf(Math.min.apply(null,till))] + customers[j]
    }
    let result = till.filter(function (el) {
      return el != undefined;
    });
    //console.log(result)
    //return the longest time till 
    return result[result.indexOf(Math.max.apply(null,result))]
  }
  queueTime([ 1, 2, 3, 4, 5 ], 100)//=>, 5
  
//   function queueTime(customers, n) {
//     let tills = Array(n).fill(0);
//     customers.forEach((ct) => {
//       let nextTill = tills.indexOf(Math.min(...tills))
//       tills[nextTill] += ct;
//     });
//     return Math.max(...tills);
//   }