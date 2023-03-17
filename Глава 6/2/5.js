function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
alert( arr1.filter(inBetween(3, 6)) );


function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
alert( arr2.filter(inArray([1, 2, 10])) );