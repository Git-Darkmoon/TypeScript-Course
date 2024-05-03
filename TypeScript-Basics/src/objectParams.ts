function createEmployee({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id, isActive: id % 2 === 0 }
}

const firstEmployee = createEmployee({ id: 1 })
const secondEmployee = createEmployee({ id: 2 })

console.log(firstEmployee)

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Hello ${student.name} code is ${student.id}`)
}

const newStudent = {
  id: 1,
  name: "John",
}

createStudent(newStudent)
createStudent({ id: 11, name: "Johny" })

// challenge]

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) {
  if (typeof input === "number") return input * input
  if (config.reverse && typeof input === "string")
    return input.split("").reverse().join("").toUpperCase()
  if (typeof input === "string") return input.toUpperCase()
}

console.log(processData(2, { reverse: true }))
console.log(processData("hello", { reverse: true }))
console.log(processData("hello"))
