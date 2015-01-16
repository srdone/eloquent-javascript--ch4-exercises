// Create a function takes an array as an argument
// It should return a new array in reverse order

var reverseArray = function(arr) {
  result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

//test
console.log(reverseArray(["A", "B", "C"]));
