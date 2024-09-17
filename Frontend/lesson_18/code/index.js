// Method reduce

const techProduct = [
    {name: 'Laptop', price: 600},
    {name: 'Phone', price: 400},
    {name: 'Tablet', price: 300},
];

const totalPrice = techProduct.reduce((totalPrice, product)=>{
    return totalPrice+product.price; // 20 +600 
}, 20);

console.log(totalPrice);

// Timer
// setTimeout

const delayedFunction = ()=>{
    console.log('Function will be executed in 3 seconds');
}

setTimeout(delayedFunction, 3000) // 1000ms = 1sec

// setTimeout and function with arguments

const greet = (userName, userAge, isAdmin)=>{
console.log(`Hello, ${userName} - ${userAge} - Admin: ${isAdmin}`);
};

setTimeout(greet, 2000, "Tom", 23, "yes");

// Call queue

console.log('1');

console.log('2');

setTimeout(()=>{console.log('3')}, 2000);

console.log('4');

setTimeout(()=>{console.log('5')}, 1000);

setTimeout(()=>{console.log('6')});

console.log('7');

// Variant cleaning option

const simpleCounter = ()=>{
    let count = 1;

    let countFunc = ()=>{
        console.log(count);
        count++;
        
    };
    const indervalId = setInterval(countFunc, 1000);
    //console.log(intervalId);

    setTimeout( ()=> {clearInterval(indervalId)}, 11000)

};

simpleCounter();

// Promises

const myPromise = new Promise((resolve, reject)=>{
    // we send request
    // example of the successful request
    const result = {
        status: '200',
        data: {
            name: 'Bob',
            age: 43
        }
    }

    //const result = {
        //status: '400',
       // message: 'Bad request'
    //}

    setTimeout(()=>{
        if(result.status ==='200'){
            resolve(result.data)
        } else{
            reject(result.message)
        }
    }, 5000)
})
console.log(myPromise);

myPromise
.then((data)=>{}).catch((error)=>{}).finally(()=>{})



