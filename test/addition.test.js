const Addition = (inputString) => {
    // if Empty
    if (isEmpty(inputString)) {
        return 0;
    }
    // Is one element as int or not
    if (isOneElementAsInt(inputString)) {
        const output = parseInt(inputString);
        return output;
    }
    // Need to handle Invalid Input String and array
    const newArray = splitWithComma(inputString);
    const sum = arrayAddition(newArray);
    return sum;
}
const isEmpty = (inputString) => {
    if (inputString.length == 0) {
        return true;
    }
    return false;
}
const isOneElement = (inputString) => {
    if (inputString.length == 1) {
        return true;
    }
    return false;
}

const isValidInt = (element) => {
    if (!isNaN(element)) {
        return true;
    }
    return false;
}

const isOneElementAsInt = (inputString) => {
    if (isOneElement(inputString) && isValidInt(inputString)) {
        return true;
    }
    return false;
}

const splitWithComma = (inputString) => {
    let arrayWithInt = [];
    const temp = inputString.split(',');
    temp.forEach(element => {
        if (isValidInt(element)) {
            arrayWithInt.push(parseInt(element));
        }else if(isNewLine(element)){
            const tempNewLineArray = splitWithNewLine(element);
            arrayWithInt = [...arrayWithInt,...tempNewLineArray];
        }
    });
    return arrayWithInt;
}

const splitWithNewLine = (inputString) => {
    const arrayWithInt = [];
    const temp = inputString.split('\n');
    temp.forEach(element => {
        if (isValidInt(element)) {
            arrayWithInt.push(parseInt(element));
        }
    });
    return arrayWithInt;
}

const arrayAddition = (newIntArray) => {
    let sum = 0;
    newIntArray.forEach(element => {
        sum = sum + element;
    })
    return sum;
}

const isNewLine = (inputString) => {
    if(inputString.indexOf("\n")!=-1){
        return true;
    }
    return false;
}

describe('Testing Addition', () => {
    // input  : ""
    // output : 0
    test("Empty String as Input", () => {
        expect(Addition("")).toBe(0);
    });
    // input  : "1"
    // output : 1
    test("Simple String with one value", () => {
        expect(Addition("1")).toEqual(1);
    });
    // input  : "1,2"
    // output : 3    
    test("Simple String with two value with comma as seperator", () => {
        expect(Addition("1,2")).toEqual(3);
    });
    // input  : "1,2,3,4,5,6,7,8,9,0,10,11,12"
    // output : 78      
    test("String with two or more value with comma as seperator",()=>{
        expect(Addition("1,2,3,4,5,6,7,8,9,0,10,11,12")).toEqual(78);
    });
    // input  : "1,2\n3"
    // output : 3       
    test("String with two or more value with comma and new line as seperator",()=>{
        expect(Addition("1,2\n3")).toEqual(6);
    });
    // input  : "1,2,3,4,5\n6,7,8\n9,0\n10,11\n12"
    // output : 78       
    test("String with two or more value with comma,new line as seperator",()=>{
        expect(Addition("1,2,3,4,5\n6,7,8\n9,0\n10,11\n12")).toEqual(78);
    });    
    test.todo("Support different delimiters");
    test.todo("Handle the negative Numbers");
})