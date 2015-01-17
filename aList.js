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

var nth = function(list, idx) {
  if (idx < 0 || (list.rest === null && idx > 0)) {
    // there aren't any elements at indexes less than zero so return undefined
    // if we gave an index that didn't exist (too high), we will reach a null
    // list.rest, but the idx will still be greater than 0 - return undefined.
    return undefined;
  } else if (idx === 0) {
    // when idx === 0, we have reached the element we want
    return list.value;
  } else {
    // if idx is > 0, we use recursion to keep going deeper.
    // remember to subtract 1 from the index and give the rest as the new list
    return nth(list.rest, idx - 1);
  }
};

var ans4 = nth(arrayToList([10, 20, 30]), 1);
console.log(ans4);
