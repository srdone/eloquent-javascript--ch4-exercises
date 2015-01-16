// Write a range function that takes two arguments (start and end)
// It should return an array of all numbers froms start to end (inclusive)

var range = function(start, end, step) {
  step = step || 1;
  var result = [];
  var posStep = (step > 0);
  for (var i = start; posStep ? (i <= end) : (i >= end); i += step) {
    result.push(i);
  }
  return result;
};

//test
console.log('range(1,2): ' + range(1,2));
console.log('range(-1,1): ' + range(-1,1));
console.log('range(1,10): ' + range(1,10));

//Write a sum function that takes an array of numbers and returns the sum

var sum = function(arr) {
  var total = 0;
  for (var i in arr) {
    // test each element to make sure it is part of arr and not arr's prototype
    // make sure to acces each element using the obj[propertyName] structure
    if (arr.hasOwnProperty(i)) total += arr[i];
  }
  return total;
};

//test
console.log('sum(range(1, 10)): ' + sum(range(1, 10)));

//test step function
console.log('range(5,2,-1): ' + range(5,2,-1));
console.log('range(1,10,2): ' + range(1,10,2));
