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
var ans1 = arrayToList([10, 20]);
console.log(ans1);

// converts a given list to an array
var listToArray = function(list) {
  var subList = list;
  var result = [];
  do {
    result.push(subList.value);
    subList = subList.rest;
  } while (subList.rest !== null);
  //when sublist.rest is null, there is still one value left to push
  result.push(subList.value);
  return result;
};

//test
var ans2 = listToArray(arrayToList([10, 20, 30]));
console.log(ans2);

var prepend = function(element, list) {
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
};

var ans3 = prepend(5, ans1);
console.log(ans3);
