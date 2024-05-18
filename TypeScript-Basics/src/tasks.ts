const $btn = document.querySelector<HTMLButtonElement>(".test-btn")!

// The above also can be reached using type assertion
// it would look like: document.querySelector(".test-btn")! as HTMLButtonElement

// adding a ! I'm telling to TS "Hey, I know for sure that won't be null"

// The ! is called: non-null assertion operator
// This non-null assertion will remove null and undefined values.

// If using the !, then the optional chaining will be removed.

$btn?.addEventListener("click", () => {
  console.log("a")
})

const $taskForm = document.querySelector<HTMLFormElement>(".form")
const $formInput = document.querySelector<HTMLInputElement>(".form-input")
const $taskListElement = document.querySelector<HTMLUListElement>(".list")

type Task = {
  description: string
  isCompleted: boolean
}

let tasks: Task[] = loadTasks()

tasks.forEach((task) => renderTask(task))
// tasks.forEach(renderTask) -> We can also do this

// IF we are passing the functions with parameters
// we need to explicitly type its parameters

function createTask(event: SubmitEvent) {
  event.preventDefault()

  const taskDescription = $formInput?.value
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }

    // add task to list
    addTask(task)
    // render tasks
    renderTask(task)
    // update local storage
    updateLocalStorage()

    $formInput.value = ""
    return
  }
  alert("Please enter a task description")
}

$taskForm?.addEventListener("submit", createTask)

function addTask(task: Task): void {
  tasks.push(task)
}

function renderTask(task: Task): void {
  const $taskElement = document.createElement("li")
  $taskElement.textContent = task.description

  // checkbox
  const $taskCheckbox = document.createElement("input")
  $taskCheckbox.type = "checkbox"
  $taskCheckbox.checked = task.isCompleted

  // toggle checkbox
  $taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted
    updateLocalStorage()
  })

  $taskElement?.appendChild($taskCheckbox)
  $taskListElement?.appendChild($taskElement)
}

// We cannot save objects in local storage
// We can only save strings

function updateLocalStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks")
  return storedTasks ? JSON.parse(storedTasks) : []
}
