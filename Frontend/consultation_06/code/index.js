// 
const rows = 10;
const cols = 10;

for(let i = 1; i<=rows; i++){
let row = "";
for(let j = 1; j <= cols; j++){
// i*j = 1*1 - first iteration of outside and inside loop
// i*j = 1*2 - first iteration of the outside and 2nd iteration of the inside loop

    const result = i * j;
    row += ' ';
    row += result;
}
console.log(row);
}

//Example . Search of the number in the matrix
const matrix = [
    [10, 15, 20, 25],
    [30, 15, 35, 40],
    [50, 60, 10, 25],
    [10, 45, 40, 70],
];

//console.log(matrix[0].length);
//console.log(matrix[3] [1]);


const target = 60;
let found = false;

// outside loop
for(let i = 0; i < matrix.length; i++){
//inside loop
for(let j = 0; j<matrix[i].length; j++){
    if(matrix[i][j]===target) {
      console.log(`Found number - ${target}`);
       found = true; 
       break;
    }
    }
      }

if(!found){
console.log(`Number ${target} not found`);
}

// when we have duplicates

const newMatrix = [
    [10, 70, 80],
    [30, 15, 35, 40],
    [70, 40, 25],
    [10, 45, 40, 80],
];

//console.log(matrix[0].length);
//console.log(matrix[3] [1]);


const luckyNumber = 70;

// outside loop
for(let i = 0; i < newMatrix.length; i++){
    let foundInRow = false;
//inside loop
for(let j = 0; j<newMatrix[i].length; j++){
    if(newMatrix[i][j]===luckyNumber) {
      console.log(`Found number - ${luckyNumber} on the position (${i} ${j})`);
       foundInRow = true; 
       continue;
    }
    }
    if(!foundInRow){
        console.log(`Number ${luckyNumber} not found in this row`);
      }
}
// Work with the User(confirm)
const userConfirm = confirm('Are you sure you want to continue')
console.log(userConfirm);

// ternary operator
const message = userConfirm ? 'You can continue' : 'You finished work'
console.log(message);

