/*Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.*/

//SAMPLE TESTS:
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(Kata.getVolumeOfCuboid(1,2,2), 4);
Test.assertEquals(Kata.getVolumeOfCuboid(6.3,2,5), 63);
  });
});*/

//SOLUTION:
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();