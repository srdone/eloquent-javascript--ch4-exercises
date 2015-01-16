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

var reverseArrayInPlace = function(arr) {
  // javascript is pass by reference on objects, so returning operating on
  // the arr object passed in should operate on arr in place
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
};

var testArray = ['A', 'B', 'C'];
reverseArrayInPlace(testArray);
console.log(testArray);
