let flips = 0;
while (true){
flips++;
const flipResult = Math.random() < 0.5 ? "Eagle" : "Tails";
console.log(`Try ${flips}: ${flipResult}`);
if(flipResult === "Eagle") {
    break; // the cycle stops when we have the eagle result
}
}
console.log(`Result "Eagle" after ${flips} tries`);
