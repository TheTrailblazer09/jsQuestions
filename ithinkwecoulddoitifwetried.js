// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. 
//A subarray is a contiguous part of an array.

function largestSum(a){
  let max=a[0];
  let currMax=a[0];
  for (let i = 1; i < a.length; ++i){
    currMax = Math.max(a[i], currMax+a[i]);
    max = Math.max(max, currMax);
  } 
  return max;
}

test(' largestSum', function(){
  let a= [-2, 1, -3, 4, -1, 2, 1,-5, 4];
  assert(largestSum(a)===6);
});
