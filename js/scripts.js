



var isATriangle = function(sideA, sideB, sideC) {
  var sumAB = sideA + sideB;
  var sumAC = sideA + sideC;
  var sumBC = sideB + sideC;

  if (((sideA + sideB) >= sideC) && ((sideA + sideC) >= sideB) && ((sideB + sideC) >= sideA)) {
      return true;
  } else {
    return false;
  }
};


var triangles = function(sideA, sideB, sideC) {
  var triangleType = "not a ";
  var sumAB = sideA + sideB;
  var sumAC = sideA + sideC;
  var sumBC = sideB + sideC;



  if ((sideA === sideB) && (sideA === sideC) && (sideB === sideC)) {
      triangleType = "equilateral";
      return triangleType;
    } else if ((sideA !== sideB) && (sideA !== sideC) && (sideB !== sideC)){
      triangleType = "scalene";
      return triangleType;
    } else if ((sideA == sideB) || (sideB !== sideC)){
      triangleType = "isosceles";
      return triangleType;
    } else {
      return triangleType;
    }
  };

$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    var sideA= parseInt($("input#side-a").val());
    var sideB= parseInt($("input#side-b").val());
    var sideC= parseInt($("input#side-c").val());
    var checkTriangle = isATriangle(sideA, sideB, sideC);
    var result = triangles(sideA, sideB, sideC);
    $(".triangle").text(" ");

    if (checkTriangle) {
      $(".triangle").text(result);
    } else {
      $(".triangle").text("Sorry, that's not a ");
    };

    $("#result").show();
    event.preventDefault();
  });
});
