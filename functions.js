/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString (number) {
    return number.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase (number){
    var number = number + 1;
    return number;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease (number) {
  number = number - 1;
  return number;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add (x, y) {
  var number = x + y;
  return number;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract (x, y) {
  var number = x - y;
  return number;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply (x, y) {
  var number = x * y;
  return number;
 }


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide (x, y) {
  var number = x / y;
  return number;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square (x) {
  var number = Math.pow(x, 2);
  return number;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate (operation, x, y) {
  switch (operation) {
    case "add":
      var sum = x + y;
      console.log( x + " + " + y + " = " + sum);
      number = sum;
      break;

    case "subtract":
      var difference = x - y;
      console.log( x + " - " + y + " = " + difference);
      number = difference;
      break;

    case "multiply":
      var product = x * y;
      console.log( x + " * " + y + " = " + product);
      number = product;
      break;

    case "divide":
      var quotient = x / y;
      console.log( x + " / " + y + " = " + quotient);
      number = quotient;
      break;
  }
  return number;
 }


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan (a, b) {
  var number = a > b;
  return number;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan (a, b) {
  var number = a < b;
  return number;
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual (a, b) {
  var number = a === b;
  return number;
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum (x, y) {
  var number = Math.min(x, y);
  return number;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum (x, y) {
  var number = Math.max(x, y);
  return number;

}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven (n){
  return (n%2 == 0);
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd (n){
  return (n%1 == 0);
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade (score, maxScore) {
  var grade = Math.round(score);
  var sum = (grade/maxScore * 100);
   switch (true) {
    case sum >= 90 && sum <= 100:
      return "A"
    case sum >= 80 && sum < 90:
      return "B"
    case sum >= 70 && sum < 80:
      return "C"
    case sum >= 60 && sum < 70:
      return "D"
    case sum >= 0 && sum < 60:
      return "F"
   }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews (restaurant) {
  if (restaurant.reviews > 0) {
    restaurant.reviews = restaurant.reviews + 1
    // code
  } else {
    restaurant.reviews = 1
  }
  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine (word1, word2) {
  return (word1 + " " + word2);


}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle (radius) {
  var circle = {};
  circle.circumference = Math.PI * 2 * radius;
  circle.area = 2 * circle.circumference;

  return circle;
}