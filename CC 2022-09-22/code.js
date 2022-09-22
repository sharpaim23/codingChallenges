/*Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).*/

//SAMPLE TESTS:
/*const chai = require("chai");
const assert = chai.assert;

describe("Testing", function() {
  it("Fixed Tests", function() {
    assert.strictEqual(logicalCalc([true, true, true, false], "AND"), false);
    assert.strictEqual(logicalCalc([true, true, true, false], "OR"), true);
    assert.strictEqual(logicalCalc([true, true, true, false], "XOR"), true);
    assert.strictEqual(logicalCalc([true, true, false, false], "AND"), false);
    assert.strictEqual(logicalCalc([true, true, false, false], "OR"), true);
    assert.strictEqual(logicalCalc([true, true, false, false], "XOR"), false);
    assert.strictEqual(logicalCalc([true, false, false, false], "AND"), false);
    assert.strictEqual(logicalCalc([true, false, false, false], "OR"), true);
    assert.strictEqual(logicalCalc([true, false, false, false], "XOR"), true);
    assert.strictEqual(logicalCalc([true, true], "AND"), true);
    assert.strictEqual(logicalCalc([true, true], "OR"), true);
    assert.strictEqual(logicalCalc([true, true], "XOR"), false);
    assert.strictEqual(logicalCalc([false, false], "AND"), false);
    assert.strictEqual(logicalCalc([false, false], "OR"), false);
    assert.strictEqual(logicalCalc([false, false], "XOR"), false);
    assert.strictEqual(logicalCalc([false], "AND"), false);
    assert.strictEqual(logicalCalc([false], "OR"), false);
    assert.strictEqual(logicalCalc([false], "XOR"), false);
    assert.strictEqual(logicalCalc([true], "AND"), true);
    assert.strictEqual(logicalCalc([true], "OR"), true);
    assert.strictEqual(logicalCalc([true], "XOR"), true);
  });
});*/


//P: Array, Boolean, String - Array of Booleans, Booleans, Strings specifying logical operators
//R: Return a Boolean result based on sequentially applying the operator to the values in the array.

//SOLUTION:
//P: Reduce Method
// Ternary operator
// With prev value and curr value
// Use all logical operators
// Show work
logicalCalc = (array, op) => !!array.reduce((prev, curr) => op == 'AND' ? prev && curr : op == 'OR' ? prev || curr : prev ^ curr)


//E
logicalCalc([true, true, true, false], "OR"), true
logicalCalc([true, true], "AND"), true
logicalCalc([true], "OR"), true      