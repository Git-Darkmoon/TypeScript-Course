type User = { id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
}
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)

  return user
}

type StringOrNumber = string | number

let value: StringOrNumber = 1
let value2: StringOrNumber = "hello"

type Theme = "light" | "dark"
let theme: Theme = "dark"
theme = "light"

function setTheme(t: Theme): void {
  theme = t
}
setTheme("light")

// ##Challenge

type Employee = {
  id: number
  name: string
  department: string
}

type Manager = {
  id: number
  name: string
  employees: Employee[]
}

type Staff = Employee | Manager

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager with ${staff.employees.length} employees`
    )
  } else {
    console.log(`${staff.name} is a employee and works in ${staff.department}`)
  }
}

const member1: Employee = {
  id: 1,
  name: "Jane",
  department: "Marketing",
}
const member2: Employee = {
  id: 100,
  name: "Janesey",
  department: "Development",
}
const member3: Employee = {
  id: 1000,
  name: "Diane",
  department: "HR",
}
const member4: Employee = {
  id: 1200,
  name: "Mary",
  department: "Finance",
}

const member5: Manager = {
  id: 10,
  name: "John",
  employees: [member1, member2, member3, member4],
}

printStaffDetails(member3)
printStaffDetails(member5)

// Intersection and Union Types

type Book = {
  id: number
  name: string
  price: number
}

type DiscountedBook = Book & { discount: number }

const book11: Book = {
  id: 1,
  name: "Book 1",
  price: 100,
}
const book12: Book = {
  id: 2,
  name: "Book 2",
  price: 200,
}

const discountedBook: DiscountedBook = {
  id: 3,
  name: "Book 3",
  price: 300,
  discount: 0.15,
}

// ----------------------------

let propName = "breed"

type Animal = {
  [propName: string]: string
}

const animal: Animal = {
  [propName]: "Dog",
}
