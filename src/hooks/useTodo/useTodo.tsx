import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export type Task = {
  id: string,
  content: string,
  isDone: boolean,

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
  const [tasks, setTask] = useState<Task[]>(listOfTasks)

  const removeTask = (id: string) => {
    const filteredTasks = tasks.filter((it) => it.id !== id)
    setTask(filteredTasks)

  }

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, isDone: !task.isDone }
      return { ...task }
    })
    setTask(updatedTasks)
  }

  const addTask = (newTask: Task) => {
    setTask([...tasks, newTask])
  }

  const getInfoTasks = () => {
    const checkedTask = tasks.filter((task) => task.isDone !== false).length
    const totalOfTask = tasks.length

    return {
      checkedTask,
      totalOfTask
    }

  }

  return {
    tasks,
    getInfoTasks,
    toggleTask,
    addTask,
    removeTask
  }
}
