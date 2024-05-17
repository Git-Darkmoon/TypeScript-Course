function sayHello(name: string) {
  console.log(`Hello ${name.toUpperCase()}`)
}
// any
// config
// set a proper type

sayHello("John")

function calculateDiscount(price: number): number {
  return price * 0.1
}

const discount = calculateDiscount(100)

const humans: string[] = ["susan", "john", "peter", "jane"]

function isNameInList(name: string): boolean {
  return humans.includes(name)
}

console.log(isNameInList("susan"))
console.log(isNameInList("rose"))
