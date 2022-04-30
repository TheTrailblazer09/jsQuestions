function duplicates(a){
  // find repeated
  let repeated=[];
  for(let i=0;i<a.length;++i){
    let newarr= a.filter(x=>x===a[i]);
    if(repeated.includes(a[i])){
      continue;
    }
    if(newarr.length>1){
      repeated.push(a[i]);
    }
    
  }
 return repeated;
}
 function missing(a){
   let n= a.length;
   let missing=[];
   for(let i=1;i<=n;++i){
     if(!a.includes(i)){
       missing.push(i);
     }
   }
   return missing;
 }

 let arr1=[3,1,3,5];
 console.log(missing(arr1));
 console.log(duplicates(arr1));

 let arr2=[4,3,6,2,1,1];
 console.log(missing(arr2));
 console.log(duplicates(arr2));