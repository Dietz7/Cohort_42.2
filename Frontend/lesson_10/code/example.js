// about anonymous function
//const newFunc = (a, b, func) => {
    //func(a, b);
  //};
  
 // newFunc(2, 3, (x, y) => x + y);
  
 // newFunc("Hello", "Tom", (greet, name) => {
    //console.log(`${greet}, ${name}`);
  //});

  // Types of data
  //1. String
  //2. Number(NaN, Infinity, drobnije znachenija)
  //3. Boolen
  //4. Null
  //5. Underfined
  //6. BigInt
  //7. Symbol
  // primitivnuje tipu dannych (1-7)
  //8. Object (object, arrays, func)

  //Arrays
  let newArray1 = [];
  let newArray2 = ["apple", "grape"];
  newArray1[0] = "red";
  newArray2[2] = "blue";

 // console.log(newArray1);
 // console.log(newArray1[1]);

  newArray1[3] = [123, 455, 65];
  //console.log(newArray1);
  //console.log(newArray1[3] [2]);

  //method
  //push - add elements to the end of the array and return the new length
 // console.log(newArray1.push(1, "green"));
  console.log(newArray1);
  
  // pop - deletes elements from the end of the array and returns the deleted element
  let deleteEl = newArray1.pop();
  //console.log(deleteEl);
  //console.log(newArray1);
  // unshift
  let result = newArray1.unshift('black', null);
  console.log(result);
  console.log(newArray1);
  //shift
  let delResult = newArray1.shift()
  console.log(delResult);
  console.log(newArray1);
  
  // for of
  let numbers = [3, 5 ,6]

  for(let number of numbers ){
    console.log(number);
  }
  
  
  
  
  
  


  
  
