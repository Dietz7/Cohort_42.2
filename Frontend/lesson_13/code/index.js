//------------vubor elementov iz DOM-------
//by id
let cardContainer = document.getElementById('card-container');
//console.log(cardContainer);

// search by name of tag
let listElements = document.getElementsByTagName('li');
//console.log(listElements.length);

// by atrribute
let titles = document.getElementsByClassName('title');
//console.log(titles);

// Po znacheniju atributa name
let unList = document.getElementsByName('list');
//console.log(unList);

//Selectors query Selector and querySelectorAll - universal selectors
let containers = document.querySelectorAll('div');
//console.log(containers);

let firstTitle = document.querySelector(".title");
console.log(firstTitle);

// adding of elements to the page
//Step 1 - Create element
let newListItem = document.createElement('li');
// Step 2 fillign with the content
newListItem.textContent = 'Surname: Smith'
// Step 3 - select element on the page in relation to which we will add the one
let list = document.querySelector('ul');
// Step 4 - we add new element to the page
//list.before(newListItem);
//list.after(newListItem);
//list.prepend(newListItem);
list.append(newListItem);

// -----changing of the element---
// with help of the textContent
let mainTitle = document.querySelector('.main-title')
console.log(mainTitle.textContent);
mainTitle.textContent = 'Main title';
console.log(mainTitle.textContent);

// with help innerHTML
let cardTitle = document.querySelector('h3');
console.log(cardTitle.innerHTML);
cardTitle.innerHTML = `
<a href = ''>Profile link<a/a>
<span>- user</span>
`;

// change of styles with help of style
cardTitle.style.backgroundColor = "bisque";
// deleting - remove method
let lastElement = document.querySelector('#last-element');
lastElement.remove();
// document.querySelector('#last-element').remove();













