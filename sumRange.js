// Write a range function that takes two arguments (start and end)
// It should return the sum of all numbers froms tart to end (inclusive)

var sum = function(start, end) {
  var total = 0;
  for (var i = start; i <= end; i++) {
    total += i;
  }
  return total;
};

//test
console.log('sum(1,2): ' + sum(1,2));
console.log('sum(-1,1): ' + sum(-1,1));
