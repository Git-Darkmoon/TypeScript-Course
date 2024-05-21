import { useState } from "react"
import { FormProps } from "./types"

function Form({ addTask }: FormProps) {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text) {
      alert("The task cannot be empty.")
      return
    }

    addTask({
      id: crypto.randomUUID(),
      description: text,
      isCompleted: false,
    })

    setText("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="form task-form">
      <input
        type="text"
        name="task"
        value={text}
        required
        onChange={handleChange}
        className="form-input"
      />
      <button type="submit" className="btn">
        Add task
      </button>
    </form>
  )
}

export default Form
