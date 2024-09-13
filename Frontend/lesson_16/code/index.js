let emptyUser = {}
    console.log(emptyUser);

    // create filled object

    const person = {
        name: 'Bob',
        age: 23,
        isAdmin: true,
    };
    console.log(person);
    
    // create property(feature) 
    emptyUser.userName = 'Tom';
    console.log(emptyUser);

    // getting of the value of feature of the object

    console.log(person.name); // we did not chagend we just called it
    let userAge = person.age; // does not change the object this is just a variable
    console.log(userAge);
    
    console.log(person);

    // change the value of the feature of the object
    person.isAdmin = false;
    console.log(person);

    // deleting of the feature from the object (using operator)
    delete person.age;
    console.log(person);

    // Bracket syntaxis helps to give more complicated names for keys
    const user = {
        ["likes bird"]: true,
    };

    console.log(user["likes bird"]);

    user['user age'] = 24;
    console.log(user);

    // allows to substitute variables 

    let key = 'isAdmin'
    console.log(person[key]);

    // operator in - allows to check if there are features in the object

    const animalData = {
        animalName: "Monkey",
        age: 4,
        city: "Berlin",
    };

    let checkValue = "city"
    if(checkValue in animalData){
        //console.log(animalData[checkValue]);
     } else {
console.log("Animal is not in the Zoo");
     }

     // perebor of the keys of the object - for in

     for(let key in animalData){
        console.log(key); // typeof key - string
        console.log(animalData[key]);
     }

     // complicated structure of the object

     const bookStore = {
        shopName: "Books",
        books: [{price: 200, name: "Book1"}, 
            {price: 300, name: "Book2"}
        ],
        sayHi(){
            console.log("Books"); 
        },
        //sayHi: ()=>{
           // console.log("Books");
     
        //},
     };

     console.log(bookStore);
     console.log(bookStore.books[1].price);
     bookStore.sayHi();
     
     
    
    
    
    


    

    
    

    

    
