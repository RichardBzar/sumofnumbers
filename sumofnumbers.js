const test = [1, 2, 3, 4];
function sumFor(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}
function sumRecursion(arr, sum, index) {
  if (index === arr.length) {
    return 0;
  }
  return sum + sumRecursion(arr, sum + arr[index], index + 1);
}
function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (sum, num) { return sum + num; }, 0);
}
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test, 0, 0));
console.log(sumTheSimpleWay(test));
