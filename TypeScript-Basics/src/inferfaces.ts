// Other way to do Type Alias

interface BookInterface {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  //   methods
  printAuthor(): void
  printTitle(message: string): string
  // Alternative for doing the methods
  //   printSomething: (something: number) => number
}

const deepWork: BookInterface = {
  isbn: 12345,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",

  printAuthor() {
    console.log(this.author)
  },
  printTitle(message: string) {
    return `${message} ${this.title}`
  },

  // --> Alternatives for doing the methods

  /*  ------- First Option -------
       printSomething: function (something: number) {
         return something
       },*/

  /* ------- Second Option --------

  printSomething: (something: number) => {

     console.log(this) --> With arrow functions the "this" keyword in JS
     refers to the global this and not to the scope as the regular functions
     if we want to access a property we need to use like following:

    console.log(deepWork.author)
    return something
  }, */
}

// console.log(deepWork.printSomething(34))

type Car = {
  brand: string
  year: number
  color?: string
  startEngine(): void
}

const bmw: Car = {
  brand: "BMW",
  year: 2020,
  color: "blue",
  startEngine() {
    console.log(`Engine of ${this.brand} started`)
  },
}

// Challenge

interface Computer {
  readonly id: number
  brand: string
  ram: number
  storage?: number
  upgradeRam(newRam: number): number
}

const lenovo: Computer = {
  id: 1,
  brand: "Lenovo",
  ram: 8,
  upgradeRam(newRam: number) {
    this.ram += newRam
    return this.ram
  },
}
console.log(lenovo)
lenovo.upgradeRam(4)
console.log(lenovo)

// EXTEND INTERFACES

interface Person {
  name: string
  getDetails(): string
}

interface DowOwner {
  dogName: string
  getDogDetails(): string
}

interface Person {
  age: number
}

const person: Person = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name},Age: ${this.age}`
  },
}

interface ActiveEmployee extends Person {
  employeeId: number
}

const employee: ActiveEmployee = {
  employeeId: 1,
  name: "Jane",
  age: 25,
  getDetails() {
    return `Name: ${this.name},Age: ${this.age}, Employee ID: ${this.employeeId}`
  },
}

console.log(employee.getDetails())

interface AManager extends Person, DowOwner {
  managePeople(people: Person[]): void
}

const manager: AManager = {
  name: "Bob",
  age: 35,
  dogName: "Jack",
  getDetails() {
    return `Name: ${this.name},Age: ${this.age}, Dog Name: ${this.dogName}`
  },
  getDogDetails() {
    return `Name: ${this.name},Age: ${this.age}, Dog Name: ${this.dogName}`
  },
  managePeople(people: Person[]) {
    console.log("Managing people...")
  },
}

manager.managePeople([person, employee])
