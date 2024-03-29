/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});*/

//P: Can 'm' be an array of integers, or strings. 
//R: All the powers of 2 with the exponent ranging from 0 to n (inclusive)

//SOLUTION:
function powersOfTwo(n){
  //P: Declare a new variable with empty brackets
  // for loop the equation for the powers of 2
  // set variable with the [i] 
  // Equal to the 2 to the power of i
  // Return arr
  // Show work
  let arr = []
  for(let i = 0; i <= n; i++)
    arr[i] = 2**i
    return arr
}


//E:
powersOfTwo(0), [1]
powersOfTwo(1), [1, 2]
powersOfTwo(4), [1, 2, 4, 8, 16]