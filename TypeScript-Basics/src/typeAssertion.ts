enum Status {
  Success = "Success",
  Pending = "Pending",
  Declined = "Declined",
}

type iUser = {
  name: string
  status: Status
}

const statusValue = "Pending"

const user: iUser = {
  name: "John",
  status: statusValue as Status, // This is the type assertion
}

/* ------ Type unknown ------
 When we use a try-catch block the type of the
 error variable will be unknown
 before using unknown we need to type cast or type check it */

/* ------ Type never ------
  Never is a type that represents the type of values that
  never occur. You can't assign any value to never.
 */

type iTheme = "light" | "dark"

function checkTheme(theme: iTheme): void {
  if (theme === "light") {
    console.log("light theme")
    return
  }
  if (theme === "dark") {
    console.log("dark theme")
    return
  }
  theme // Here the variable will have the type never
  // due to we already handled all the cases
  // so its impossible for it to take a value.
}
