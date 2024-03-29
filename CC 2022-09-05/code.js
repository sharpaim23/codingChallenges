/*Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"*/

//SAMPLE TESTS:
/*describe("Basic tests",() =>{
Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
Test.assertSimilar(whoIsPaying("Me"),["Me"]);
Test.assertSimilar(whoIsPaying(""), [""]);
Test.assertSimilar(whoIsPaying("I"), ["I"]);
});*/


//P: Name -  Full name of the neighbors, truncating names until two letters are left
//R: Easier for ol' Don ThinSkin to remember the neighbors name..

//SOLUTION:
//P: Length of the neighbors name
// Less than or equal to 2
// Leaving either the Full name or just the first two letters
// Show work
function whoIsPaying(name){
  return name.length <= 2 ? [name] : [name, name.substr(0,2)]
}


//E
whoIsPaying("Mexico"),["Mexico", "Me"]
whoIsPaying("Melania"),["Melania", "Me"]
whoIsPaying("Melissa"),["Melissa", "Me"]