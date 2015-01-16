// converts a given array to a list structure:
// arrayToList([10,20]) --> {value: 10, rest: {value: 20, rest: null}}
var arrayToList = function(arr) {
  var rest = null;
  for (var i = arr.length - 1; i >= 0; i--) { //last to first so we can chain
    var smallList = {};
    smallList.value = arr[i];
    smallList.rest = rest;
    // pass the newly created list to the rest value for use in next iteration
    rest = smallList;
  }
  return rest;
};

//test
console.log(arrayToList([10, 20]));


