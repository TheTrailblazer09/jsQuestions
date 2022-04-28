function isSubset(arr1, arr2){
  let found=true;
  arr2.forEach(x=> {
    if(!arr1.includes(x)){
      found=false;
      } 
 });
 return found;
}


test('array2 is a subset of arr1', function(){
assert(isSubset([1, 2, 3, 4, 5, 6],[1, 2, 4] ));
});

test('array2 is not a subset of arr2', function(){
assert(isSubset([10, 5, 2, 23, 19],[19, 5, 3] )===false);
});

test('check for duplicates', function(){
  assert(isSubset([1,2,3,4,5,6],[1,2,2,4])===false);
});

test(' duplicate passes', function(){
  assert(isSubset([1,2,2,3,4,5,6],[1,2,2,4]));
});

test(' single set', function(){
  assert(isSubset([1,2,2,3,4,5,6],[1]));
});
