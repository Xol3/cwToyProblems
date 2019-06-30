function deleteNth(arr,n){
    // ...
    let count = {};
    let result = [];
    for(let i = 0; i < arr.length; i++){
      if(!count[arr[i]] ){
        count[arr[i]]=1;
        result.push(arr[i])
      }else if(count[arr[i]]<n ){
        count[arr[i]]+=1;
        result.push(arr[i])
      }else{
        count[arr[i]]+=1
      }
    }
    return result
  }