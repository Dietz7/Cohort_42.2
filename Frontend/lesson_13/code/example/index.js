// Selection of the element list
let list = document.querySelector('.order-list');

// Point 1
let newFirstElement = document.createElement("li");
let newLastElement = document.createElement("li");

newFirstElement.textContent = 'Element 1.0'
newLastElement.textContent = 'Element 5.1'

list.prepend(newFirstElement);
list.append(newLastElement);

// Point 2
// Ways of selection of the nested elements
//1st way by ID
let secondElementById = document.getElementById('second-element');
console.log(secondElementById);

// 2nd way - children
let secondElementByChildren = list.children[1];
console.log(secondElementByChildren);

//3rd way

let secondElementByTag = list.getElementsByTagName('li')[1]
console.log(secondElementByTag);

// 4th way - by css selector
let secondElementByCssSelector = list.querySelector('li:nth-child(2)');
console.log(secondElementByCssSelector);

// change of the content
secondElementByChildren.textContent = "Element 2.0";

// point 3
let thirdElement = list.children[2];
//console.log(thirdElement);
console.log(thirdElement.remove());

//let thirdElement = list.children[2];
//console.log(list.removeChild(thirdElement));

//point 3
let fourthElement = list.getElementsByTagName('li')[3];
fourthElement.style.color = 'blue';
console.log(list.getElementsByTagName('li'));


