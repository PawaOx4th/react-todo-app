import clsx from "clsx"
import { useState } from "react"
import { BsFileEarmarkPlusFill, BsXLg } from "react-icons/bs"

const TODO = [
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
  const [title, setTitle] = useState("")
  const [checked, setChecked] = useState(false)

  const handleCreateTodo = ({ title }: { title: string }) => {
    const newTodo = {
      id: Math.random().toString(32).slice(2),
      title,
      completed: false
    }
    setTodoList((latestValue) => [newTodo, ...latestValue])
    setTitle("")
  }

  const handleRemoveTodo = (id: string) => {
    return setTodoList((latestValue) =>
      latestValue.filter((todo) => todo.id !== id)
    )
  }

  return (
    <div className="App">
      <nav className="h-16 w-full bg-white"></nav>
      <main>
        <div className="relative mx-auto mb-3 grid w-10/12 grid-flow-row grid-cols-12 gap-4 lg:w-5/12">
          <form
            className=" col-span-12 mt-4 flex gap-4"
            onSubmit={(e) => {
              e.preventDefault()

              handleCreateTodo({
                title
              })
            }}>
            <label htmlFor="type-todo" className="flex-1">
              <input
                name="type-todo"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={clsx(
                  "w-full p-5 text-xl",
                  "outline-brand",
                  "rounded-md",
                  "focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2",
                  "font-semibold",
                  "text-black"
                )}
              />
            </label>
            <button
              type="submit"
              disabled={title.length === 0}
              className={clsx(
                "bg-brand",
                "w-16 lg:w-32",
                "rounded-md",
                "hover:bg-brand/80",
                "transition-colors",
                "font-semibold",
                "active:outline active:outline-[2px] active:outline-offset-2",
                "outline-brbg-brand",
                "flex",
                "justify-center",
                "items-center",
                "gap-2",
                "disabled:bg-brand/50"
              )}>
              <BsFileEarmarkPlusFill size={20} className={""} />{" "}
              <span className="hidden lg:inline">Create</span>
            </button>
          </form>

          <div className="bg-tertiary col-span-12 my-6 h-[2px]" />
          {todoList.map((todo) => (
            <div
              id="todo-card"
              key={todo.id}
              className={clsx(
                "col-span-12 overflow-hidden rounded-md bg-mid p-4  shadow-lg transition-shadow hover:shadow-white/10"
              )}>
              <div className="flex items-center justify-start gap-3">
                <input
                  aria-label="todo"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => {
                    setTodoList((latestValue) =>
                      latestValue.map((item) => {
                        if (todo.id === item.id) {
                          item.completed = e.target.checked
                        }
                        return item
                      })
                    )
                  }}
                  className="h-6 w-6 cursor-pointer rounded border-gray-300 text-brand checked:bg-brand focus:ring-brand"
                />
                <span className="flex-1 break-all">{todo.title}</span>
                <BsXLg
                  className="cursor-pointer transition-all active:scale-110"
                  onClick={() => handleRemoveTodo(todo.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
