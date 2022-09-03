import clsx from "clsx"
import { useState } from "react"
import { BsFileEarmarkPlusFill, BsXLg } from "react-icons/bs"
import Footer from "./components/Footer"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"

export const TODO = [
  {
    id: "1",
    title: "Learn React",
    completed: false
  },
  {
    id: "2",
    title: "Learn Typescript",
    completed: true
  },
  {
    id: "3",
    title: "Learn Tailwind",
    completed: false
  }
]

function App() {
  const [todoList, setTodoList] = useState<typeof TODO>(TODO)

  const handleCreateTodo = ({ title }: { title: string }) => {
    const newTodo = {
      id: Math.random().toString(32).slice(2),
      title,
      completed: false
    }
    setTodoList((latestValue) => [newTodo, ...latestValue])
    return true
  }

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = event.target
    setTodoList((latestValue) =>
      latestValue.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked }
        }
        return todo
      })
    )
  }

  const handleRemoveTodo = (id: string) => {
    return setTodoList((latestValue) =>
      latestValue.filter((todo) => todo.id !== id)
    )
  }

  return (
    <div className="App min-h-screen">
      <nav className="h-16 w-full bg-white"></nav>
      <main className="min-h-[calc(100vh-100px)]">
        <div
          className={clsx([
            "relative",
            "mx-auto",
            "mb-3",
            "w-10/12",
            "lg:w-5/12",
            "grid",
            "grid-flow-row",
            "grid-cols-12",
            "gap-4"
          ])}>
          <TodoInput handleCreateTodo={handleCreateTodo} />
          <div className="bg-tertiary col-span-12 my-6 h-[2px]" />
          <ul className="col-span-12 grid gap-3">
            {todoList.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                todoId={todo.id}
                handleCheck={handleCheck}
                handleRemoveTodo={handleRemoveTodo}
              />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
