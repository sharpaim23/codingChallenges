/*The male gametes or sperm cells in humans and other mammals are heterogamete and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
Test.assertEquals(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")
  });
});*/

//P: what about chromosomes that have three, or chromosomes that are hermaphrodites
//R: The Congrats to which ever the sex of the new child

//SOLUTION:
//P:If else statement
// using includes
// return the correct congrats
// show work
function chromosomeCheck(sperm) {
  return sperm.includes('Y') ? "Congratulations! You\'re going to have a son." : "Congratulations! You\'re going to have a daughter."
}


//E:
chromosomeCheck('XY'), "Congratulations! You're going to have a son."
chromosomeCheck('XX'), "Congratulations! You're going to have a daughter."