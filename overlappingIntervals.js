function overlap(arr){
if(arr.length===1){
  return arr;
}
 for(let i=1;i<arr.length;++i){
   if(arr[i][0]<=arr[i-1][1]){
     arr[i]= [arr[i-1][0], arr[i][1]];
     arr.splice(i-1,1);
   }
 }
 return arr;
}

console.log(overlap([[1,3],[2,6],[8,10],[15,18]]));

console.log(overlap([[1,4],[4,5]]));
