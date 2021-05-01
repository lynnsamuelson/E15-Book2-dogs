const string = "Hello World";
const int = 35;
const float = 3.78;
const boolean = true;

const dogNames = ["Joel", "Mr. Tickles", "Daisy", "BenjI", "Nebula", "Snotts", "Rufus"];

const dogInfo = [39.6, "Joel", "Beagle", true, 5];

const joel = {
  id: 1,
  weight: 39.6,
  name: "Joel",
  breed: "Beagle",
  goodBoy: true,
  age: 5
}

const mrT = {
  id: 2,
  weight: 3.2,
  name: "Mr. Tickles",
  breed: "Daschund",
  goodBoy: true,
  age: 4
}

const dogs = [
  {
    id: 1,
    weight: 39.6,
    name: "Joel",
    breed: "Beagle",
    goodBoy: true,
    age: 5
  },
  {
    id: 2,
    weight: 3.2,
    name: "Mr. Tickles",
    breed: "Daschund",
    goodBoy: true,
    age: 4
  },
  {
    id: 3,
    weight: 4.2,
    name: "Benji",
    breed: "Chihuahua",
    goodBoy: true,
    age: 0.25
  },
  {
    id: 4,
    weight: 104.2,
    name: "Nebula",
    breed: "Great Dane",
    goodBoy: false,
    age: 4
  }
]

// console.log(mrT);

// console.log(dogs)
// console.log(dogs[2])
// Nebula is a great dane and weighs a hundred pounds

console.log(`${dogs[3].name} is a ${dogs[3].breed} and weighs ${dogs[3].weight} pounds.`)

