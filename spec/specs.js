describe('isATriangle', function() {

  it("returns false when not a triangle", function() {
    expect(isATriangle(2,1,8)).to.equal(false);
  });

});

describe('triangles', function() {

  it("is scalene when all sides are not equal", function() {
    expect(triangles(3,4,5)).to.equal("scalene");
  });

  it("is equilateral when all sides are equal", function() {
    expect(triangles(3,3,3)).to.equal("equilateral");
  });

  it("is isosceles when two sides are equal", function() {
    expect(triangles(3,5,3)).to.equal("isosceles");
  });

});
