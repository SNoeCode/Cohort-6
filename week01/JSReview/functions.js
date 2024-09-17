const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnString = function () {
  return "abc123";
};

const addition = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtraction = function (a, b) {
  let sum = a - b;
  return sum;
};

const multiplication = function (a, b) {
  let sum = a * b;
  return sum;
};

const division = function (a, b) {
  let div = a / b;
  return div;
};
const returnArray = function () {
  return [1, 2, 3];
};

const returnFirstIndex = function (arr) {
  return arr[0];
};

const returnSecondIndex = function (arr) {
  return arr[1];
};

const returnArrayLength = function (arr) {
  return arr.length;
};

const arraySum = function () {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const arraySubtraction = function (arr, num) {
  return arr.reduce((result, num) => result - num);
};

const multiplicationArray = function () {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const divisionArray = function () {
  let div = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result /= arr[i];
  }
  return result;
};
const oddArray = function (arr) {
  return arr.filter((num) => num % 2 !== 0);
};

const evenArray = function (arr) {
  return arr.filter((num) => num % 2 === 0);
};

module.exports = {
  returnEmptyString,
  returnZeroNumber,
  returnEmptyArray,
  returnEmptyObject,
  returnString,
  addition,
  subtraction,
  multiplication,
  division,
  returnArray,
  returnFirstIndex,
  returnSecondIndex,
  returnArrayLength,
  arraySum,
  arraySubtraction,
  multiplicationArray,
  divisionArray,
  oddArray,
  evenArray,
};
