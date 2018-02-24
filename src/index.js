module.exports = function solveEquation(equation) {
  var someString = "+24 * x^2 - 238 * x + 54";

  var chengedEquation = equation.replace("x^2", "").replace("x", "").replace(/\*/g, "").replace(/  /g, "");
  var ourArray = chengedEquation.split(" ");

  var emptyArray = [];
  var a = parseInt(ourArray[0]);
  var b = parseInt(ourArray[1] + ourArray[2]);
  var c = parseInt(ourArray[3] + ourArray[4]);

  var D = (b*b) - (4*a*c);
  var x1 = Math.round((-b + Math.sqrt(D))/(2*a)); 
  var x2 = Math.round((-b - Math.sqrt(D))/(2*a)); 

  if (x1>x2) {
    return [x2,x1];
  } else {
    return [x1,x2];
  }
}
