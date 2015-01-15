// Write a range function that takes two arguments (start and end)
// It should return the sum of all numbers froms tart to end (inclusive)

var range = function(start, end) {
  var total = 0;
  for (var i = start; i <= end; i++) {
    total += i;
  }
  return total;
};

//test
console.log('range(1,2): ' + range(1,2));
console.log('range(-1,1): ' + range(-1,1));
