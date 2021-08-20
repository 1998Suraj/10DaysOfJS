function getSecondLargest(nums) {
    // Complete the function
    let sort = nums.sort();
   return sort[sort.indexOf(Math.max(...sort)-1)];
}

// second method
function getSecondLargest(nums) {
    // Complete the function
    let arr = nums;
    var max = 0, secondMax = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i]>max){
        secondMax = max;
        max = arr[i];
      }//console.log(max, secondMax);
       else if(arr[i]<max && arr[i]>secondMax){
         secondMax = arr[i];
       }
    }
    console.log(secondMax);
}
