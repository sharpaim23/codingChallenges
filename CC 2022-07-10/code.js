/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!*/

//SAMPLE TESTS:
/*const assert = require("chai").assert;

describe("Tests", () => {
  it("test", () => {
assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");
  });
}); */


//P: Can there be negative integers, strings, objects other than integers
//R: One array sorted and merged in asc order remove duplicates

//SOLUTION:
function mergeArrays(arr1, arr2) {
  //P: Spread of the arr 
  // In a new Set 
  // Concat both arrays together
  // sort and return new arr in asc order
  // show work
  return [...new Set(arr1.concat(arr2))].sort((a,b) => a-b)
}


//E:
[1,2,3,4], [5,6,7,8], [1,2,3,4,5,6,7,8], "Basic tests"
[1,3,5,7,9], [10,8,6,4,2], [1,2,3,4,5,6,7,8,9,10], "Basic tests"
[1,3,5,7,9,11,12], [1,2,3,4,5,10,12], [1,2,3,4,5,7,9,10,11,12], "Basic tests"
