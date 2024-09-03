const arrayProcessor = (array, operation) => {
    let stringArray = []; 
    for (let element of array) {
        stringArray.push(String(element));
    }
    return operation(stringArray);
}

const stringLength = (array) => {
    let lengthTotal = 0;
    for (let element of array) {
        console.log(`Element: "${element}", Length: ${element.length}`);
        lengthTotal += element.length;
    }
    return lengthTotal;
}

let originalArray = ['apple', 27, 'banana', 'kiwi'];
let lengthTotalResult = arrayProcessor(originalArray, stringLength);
console.log(`Total Length: ${lengthTotalResult}`);
    
    