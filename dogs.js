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
  },
  {
    id: 5,
    weight: 104.2,
    name: "Benji",
    breed: "Great Dane",
    goodBoy: false,
    age: 4
  }
]

// console.log(mrT);

// console.log(dogs)
// console.log(dogs[2])
// Nebula is a great dane and weighs a hundred pounds

// console.log(`${dogs[3].name} is a ${dogs[3].breed} and weighs ${dogs[3].weight} pounds.`)

// for(const dog of dogs){
//   console.log(`${dog.name} is a ${dog.breed}`)
// }

//Joel is a good dog
//Nebula is a bad dog
// for(const dog of dogs){
//   if(dog.goodBoy === true) {
//     console.log(`${dog.name} is a good dog.`)
//   } else {
//     console.log(`${dog.name} is a bad dog.`)
//   }
// }

//other way to loop
// for(let i=0; i<dogs.length; i++){
//   console.log(`${dogs[i].name} is a ${dogs[i].breed}`);
// }

//Add dog
let newDog = {
  id: 5,
  weight: 76,
  name: "Parade",
  breed: "Chow Chow",
  goodBoy: false,
  age: 27
}

// dogs.push(newDog)
// dogs.pop()
for(const dog of dogs){
  // console.log(`${dog.name} is a ${dog.breed}`)
}

//Performing logic in loops (Ch 8)
//A year has past since this code was written and now the dogs ages are incorrect.  How can we display the correct age without change every part of the database?
for(const dog of dogs) {
  dog.age = dog.age + 1
  // console.log(`${dog.name} is now ${dog.age} years old.`)
}

//Benji is going to be adopted, but the new owners want to know all the information about him.  We know Benji's id = 3. How can we find Benji.
for(const dog of dogs) {
  // if(dog.id === 3) {
  //   console.log(dog)
  // }
  if(dog.id === 3 ) {
    // console.log(dog)
  }
}

//After the rescue has a new dog to add.  Write a function to add the new dog.

const AddNewDog = (newDogObject) => {
  // console.log(newDog)
  const lastIndex = dogs.length - 1
  const lastDog = dogs[lastIndex]
  const lastDogId = lastDog.id
  const idForNewDog = lastDogId + 1

  newDogObject.id = idForNewDog
  //push
  dogs.push(newDogObject)
}

const AnotherDog = () => {
  let nextDog = {
    weight: 20,
    name: "Miss Giggles",
    breed: "Sheba",
    goodBoy: false,
    age: 75
  }
  AddNewDog(nextDog)
}
AnotherDog()
console.log(dogs)

