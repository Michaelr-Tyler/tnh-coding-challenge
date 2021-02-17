// Implement a Dog class and Cat class that track attributes as seen above and includes a greet method to introduce itself. Fill in the body of the greetAnimals method so that each animal provided 
// gives the appropriate introduction. Optimize your implementation to make your code concise, readable, and reusable. Pretend that this code has to go to production. What would you add/change to 
// give yourself and your team confidence that it's not going to bring the site down?

//Instead of repeating code I can create a parent animal class
class Animal{
  constructor (name, breed, age, weight, chipId) {
    this.name = name
    this.breed = breed
    this.age = age
    this.weight = weight
    this.chipId = chipId
  }
}

// then I can create a cat and dog subclass, or child class
class Cat extends Animal {
  constructor (name, breed, age, weight, chipId, species){
    super(name, breed, age, weight, chipId);
    this.species = 'Cat'
  }
}

class Dog extends Animal{ 
	  constructor (name, breed, age, weight, chipId, species){
    super(name, breed, age, weight, chipId);
    this.species = 'Dog'
  }
}
// Finally create an instance of each class
let duke = new Dog('duke', 'corgi', 1, 22, '55cdac0e-2029-4764-85bd-f2378f87c4cf')
let merlin = new Cat('merlin', 'maine coon', 12, 17, '55cdac0e-2029-4764-85bd-f2378f87c4cf')

// create a function to call their greetings
// moved the greeting here to sorta remove what I believe to be couplling between the parent and child classes
const greetAnimals = animals => { 
    console.log(`Hi, my name is ${animals.name}. I am a ${animals.age} year old ${animals.breed} ${animals.species}, that weighs ${animals.weight} pounds. My chip identification is ${animals.chipId}`)
}

const allAnimals = [duke, merlin]


allAnimals.map((animal) => {
  greetAnimals(animal)
})