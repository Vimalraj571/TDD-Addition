const isEmpty = (inputString) => inputString.length === 0;
const isOneElement = (inputString) => inputString.length === 1;
// eslint-disable-next-line no-restricted-globals
const isValidInt = (element) => !isNaN(element);
const isOneElementAsInt = (inputString) =>
  isValidInt(inputString) && isOneElement(inputString);
const isNewLine = (inputString) => inputString.indexOf("\n") !== -1;
const isCustomDelimiter = (inputString) => inputString.indexOf("//") !== -1;
const isNegativeValue = (element) => element >= 0;

const errNegative = () => {
  throw new Error("negatives not allowed");
};

const errInvalidInput = () => {
  throw new Error("not a valid input");
};

const findCustomDelimiter = (inputString) => {
  // "//[delimiter]\n[numbers…]"
  let customDelimiter = "";
  if (inputString[0] === "/" && inputString[1] === "/") {
    const temp = inputString[2];
    customDelimiter = temp;
  }
  return customDelimiter;
};

const splitWithNewLine = (inputString) => {
  const arrayWithInt = [];
  const temp = inputString.split("\n");
  temp.forEach((element) => {
    if (isValidInt(element)) {
      arrayWithInt.push(parseInt(element, 10));
    }
  });
  return arrayWithInt;
};

const splitWithComma = (inputString) => {
  let arrayWithInt = [];
  const temp = inputString.split(",");
  temp.forEach((element) => {
    if (isValidInt(element)) {
      arrayWithInt.push(parseInt(element, 10));
    } else if (isNewLine(element)) {
      const tempNewLineArray = splitWithNewLine(element);
      arrayWithInt = [...arrayWithInt, ...tempNewLineArray];
    }
  });
  return arrayWithInt;
};

const splitWithCustomDelimiter = (inputString, customDelimiter) => {
  const arrayWithInt = [];
  const temp = inputString.split(customDelimiter);
  temp.forEach((element) => {
    if (isValidInt(element)) {
      arrayWithInt.push(parseInt(element, 10));
    }
  });
  return arrayWithInt;
};

const arrayAddition = (newIntArray) => {
  let sum = 0;
  newIntArray.forEach((element) => {
    if (isNegativeValue(element)) {
      sum += element;
    } else if (isValidInt(element)) {
      errNegative();
    } else {
      errInvalidInput();
    }
  });
  return sum;
};

const Addition = (inputString) => {
  // if Empty
  if (isEmpty(inputString)) {
    return 0;
  }

  if (isOneElementAsInt(inputString)) {
    const output = parseInt(inputString, 10);
    return output;
  }
  let newArray = [];
  // “//[delimiter]\n[numbers…]”
  if (isCustomDelimiter(inputString)) {
    const customDelimiter = findCustomDelimiter(inputString);
    newArray = splitWithCustomDelimiter(inputString, customDelimiter);
  } else {
    newArray = splitWithComma(inputString);
  }

  const sum = arrayAddition(newArray);
  return sum;
};

module.exports = {
  Addition,
};
