let spaceShip = {
    name: "Rocinante",
    manufacturer: "Maxar Space",
    crew: [{titel: "Captain", name: "David"}, 
           {titel: "Pilot", name: "Jake"}
    ],
    maxSpeed: 8,
    sayHi: ()=> {
        console.log(crew);
    },
};

console.log(spaceShip);
