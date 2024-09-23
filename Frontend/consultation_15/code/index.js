//----prototypes
const band = {
    bandType: "Rock",
  };
  
  // console.log(band.bandType);
  //console.log(band.__proto__);
  
  const musician = {
    isSign: true,
    isPlay: true,
    play() {
      console.log("Bum!");
    },
    __proto__: band, //двойное нижнее подчеркивание
  };
  
  // console.log(musician.bandType);
  // console.log(musician.__proto__);
  
  const eltonJohn = {
    name: "Elton John",
  };
  
  eltonJohn.__proto__ = musician;
  eltonJohn.play();
  
  eltonJohn.play = () => {
    //console.log("Play piano");
  };
  
  eltonJohn.play();
  musician.play();
  
  //console.log(eltonJohn.bandType);

  const michaelJackson = {
    name: "Michael Jackson",
  };

  Object.setPrototypeOf(michaelJackson, musician);
  //console.log(Object.getPrototypeOf(michaelJackson));
  
  // classes
  class Wizard {
    constructor(nameWizard, houseWizard) {
        this.name = nameWizard;
        this.house = houseWizard;
    }

    introduce() {
        console.log(`IM ${this.name} from ${this.house}`);
    }
  }

  // create class exemplare
  const harry = new Wizard("Harry Potter", "Gryffindor");
  console.log(harry);
  harry.introduce();

  const hermiona = new Wizard("Hermiona Granger", "Gryffindor");
  hermiona.introduce();
  hermiona.house = 'Slytherin'
  console.log(hermiona);
  
 harry.name = 'Harry'

 console.log(harry);
 console.log(hermiona);

 // Nasledovanije klassov
 class DarkWizzard extends Wizard {
constructor (nameWizard, houseWizard, darkPower){
  super(nameWizard, houseWizard)
  this.darkPower = darkPower;
}

useDarkPOwer (){
  console.log(`IM ${this.name} from ${this.house} and uses dark power ${this.darkPower}`
    
  );
  
}
 }
 console.log(DarkWizzard);
 const voldemort = new DarkWizzard ("Lord Voldermort", 
  "Slytherin", 
  "Avada kedavra" 
);

console.log(voldemort);
voldemort.useDarkPOwer();
voldemort.introduce();


 
 