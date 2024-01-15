import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export type Todo = {
  id: number
  text: string
  isChecked: boolean
}


const listOfTasks = [
  {
    id: uuidv4(),
    content: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
    isDone: true
  },
  {
    id: uuidv4(),
    content: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
    isDone: false
  }
]

export function useTodo() {
  const [todo, setTodo] = useState(listOfTasks)

  const removeTask = (id: string) => {
    const filteredTasks = todo.filter((it) => it.id !== id)
    setTodo(filteredTasks)

  }

  const toggleTask = (id: string) => {
    const updatedTasks = todo.map((task) => {
      if (task.id === id) return { ...task, isDone: !task.isDone }
      return { ...task }
    })
    setTodo(updatedTasks)
  }

  const addTask = (newTask: Todo) => {
    setTodo([...todo, newTask])
  }

  return {
    todo,
    toggleTask,
    addTask,
    removeTask
  }
}
