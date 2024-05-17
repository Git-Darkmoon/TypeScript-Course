// ----- Challenge | typeof guard -----

type ValueType = string | number | boolean

let value: ValueType
const random = Math.random()
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true

function checkValue(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase())
    return
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2))
    return
  }

  console.log(`Boolean: ${value}`)
}

checkValue(value)

// ----- Challenge | Equality narrowing -----

type Dog = { type: "dog"; name: string; bark: () => void }
type Cat = { type: "cat"; name: string; meow: () => void }
type Animal = Dog | Cat

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     // TypeScript knows that `animal` is a Dog in this block
//     animal.bark()
//   } else {
//     // TypeScript knows that `animal` is a Cat in this block
//     animal.meow()
//   }
// }

function makeSound(animal: Animal) {
  if ("bark" in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark()
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow()
  }
}

// ----- Challenge | "Truthy"/"Falsy" guard -----

function printLength(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string
    // because `null` and `undefined` are falsy values.
    console.log(str.length)
  } else {
    console.log("No string provided")
  }
}

printLength("Hello") // Outputs: 5
printLength(null) // Outputs: No string provided
printLength(undefined) // Outputs: No string provided

// ----- Redux Sample -----
type IncrementAction = {
  type: "increment"
  amount: number
  timestamp: number
  user: string
}

type DecrementAction = {
  type: "decrement"
  amount: number
  timestamp: number
  user: string
}

type Action = IncrementAction | DecrementAction

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + action.amount
    case "decrement":
      return state - action.amount

    default:
      const unexpectedAction: never = action
      throw new Error(`Unexpected action: ${unexpectedAction}`)
  }
}

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
})
