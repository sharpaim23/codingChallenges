/*Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(changeMe("£1"),"20p 20p 20p 20p 20p");
Test.assertEquals(changeMe("Money"),"Money");
  });
});*/


//P: Strings - distribute strings rather than numbers, change return in one string separated by spaces and no commas, desc values of the strings
//R: Return the appropriate amount of money from the machine.

//SOLUTION:
//P: Switch Statement
// Use repeat method for the bills
// Trim method for the white spaces and commas
// Show work
function changeMe(moneyIn){
  switch (moneyIn) {
    case '£5' : return '20p '.repeat(25).trim()
    case '£2' : return '20p '.repeat(10).trim()
    case '£1' : return '20p '.repeat(5).trim()
    case '50p' : return '20p 20p 10p'
    case '20p': return '10p 10p'
    default: return moneyIn
  }
}


//E
changeMe("£1"),"20p 20p 20p 20p 20p"
changeMe("Money"),"Money"
changeMe("£5"),"£1 £1 £1 £1 20p 20p 20p 20p 10p 10p"