/*
The main issue with TS is that, when you create
a variable i.e John, the variable will have like
a global scope and not a local scope. So
it will become an issue if you try to use that
variable in other file.

By default treat files as script in the global scope

HOW TO FIX IT:
- use import/export keyword
- change the ts config and add:
    -> "moduleDetection:" the default value is "auto"
    then, change it to "force"

*/

// When importing a type from another file
// NOT a MUST BUT it is recommended to do it like this:

import { type User } from "./typeAlias"

const user: User = {
  name: "John",
  id: 1,
  isActive: true,
}
