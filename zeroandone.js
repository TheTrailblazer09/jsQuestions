function sort(arr){
  let newarr=[0,0,0];
  arr.forEach(x=> ++newarr[x]);
  let newa=Array.create(newarr[0]+newarr[1]+newarr[2],0);
  console.log(newa);
  let count=0;
  for(let i=0;i<newa.length;++i){
    if(i<newarr[count]){
      newa[i]=count;
    }
    else{
      count+=1;
      newa[i]=count;
    }
     console.log(count);
  }
  return newa;
  
}

// sort O(n^2)

