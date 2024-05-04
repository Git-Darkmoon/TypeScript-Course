enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}

interface ServerResponse {
  result: ServerResponseStatus
  data: string[]
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["data1", "data2"],
  }
}

let response = getServerResponse()
console.log(response)

// Challenge

enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  EMPLOYEE = "employee",
}

type AUser = {
  id: number
  name: string
  role: UserRole
  contact: [email: string, phone: string]
}

function createAUser(user: AUser): AUser {
  return user
}

const newUser: AUser = createAUser({
  id: 1,
  name: "John",
  role: UserRole.ADMIN,
  contact: ["jhon@example.com", "+5533272"],
})

console.log(newUser)
