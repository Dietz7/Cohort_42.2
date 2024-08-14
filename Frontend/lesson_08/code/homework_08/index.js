//const num = 17;
//let str = String(num); // "17"
//console.log(typeof str);

/* to string */
//String() is a built-in JavaScript function that converts any value passed to it into a string.
//String(value) takes the value and converts it to its string representation.
console.log('17 to string is ' + String(17));
console.log('17 to string is ' + 17 + '');
console.log('-17.17 to string is'  + String(-17.17));
console.log('false to string is ' + String(false));
console.log('null to string is ' + String(null));
console.log('undefined to string is ' + String(undefined));
console.log('o to string is ' + String(0));

/* to number */
//Number(value) is a JavaScript function that converts the value to a number.
//If the conversion is successful, it returns the corresponding numeric value.
//If the conversion fails (e.g., when the value can't be interpreted as a number), 
//it returns NaN (which stands for "Not-a-Number").
console.log("'17' to number is " + Number('17'));
console.log('true to number is ' + Number(true)); //1
console.log('false to number is ' + Number(false)); //0
console.log('null to number is ' + Number(null)); //0
console.log('undefined to number is ' + Number(undefined));
//Number(undefined) converts undefined to NaN because undefined can't be converted to a number.
console.log("'  20  ' to number is " + Number('  20  '));
//Number(' 20 ') converts the string ' 20 ' (with leading and trailing spaces) to the number 20. 
//JavaScript ignores the spaces during conversion.
console.log("'    ' to number is " + Number('    '));
//Number(' ') converts a string of spaces to the number 0. An empty string (or one that only contains spaces)
// is interpreted as 0.
console.log("'  30d  ' to number is " + Number('  30d  ')); // NaN
//contains a non-numeric character d that is why fails resulting in NaN

/* to boolean */
//Falsy values (which are converted to false) include false, 0, -0, 0n (BigInt zero), "" (empty string), 
//null, undefined, and NaN. Everything else is truthy (converted to true).
console.log('null to boolean is ' + Boolean(null)); //false
console.log('undefined to boolean is ' + Boolean(undefined));
console.log('0 to boolean is ' + Boolean(0));
console.log('-0 to boolean is ' + Boolean(-0));
console.log("' to boolean is " + Boolean(''));
console.log("' ' to boolean is " + Boolean(' '));
//Non-empty strings are considered truthy, even if they contain only whitespace.
console.log('17 to boolean is ' + Boolean(17));
console.log("'Hello' to boolean is " + Boolean('Hello'));




























