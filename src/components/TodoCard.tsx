import React, { memo, useMemo } from "react"
import { TODO } from "../App"
import clsx from "clsx"
import { BsXLg } from "react-icons/bs"

type Props = {
  todo: typeof TODO[0]
  todoId: typeof TODO[0]["id"]
  handleCheck: (
    _event: React.ChangeEvent<HTMLInputElement>,
    id: typeof TODO[0]["id"]
  ) => void
  handleRemoveTodo: (_todoId: string) => void
}

function TodoCard({ todo, handleCheck, handleRemoveTodo }: Props) {
  return (
    <li
      id="todo-card"
      className={clsx(
        "overflow-hidden",
        "rounded-md",
        "bg-mid",
        "p-4",
        "shadow-lg",
        "transition-shadow",
        "hover:shadow-white/10"
      )}>
      <div className="flex items-center justify-start gap-3">
        <input
          aria-label="todo"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            handleCheck(e, todo.id)
          }}
          className={clsx(
            "h-6 w-6",
            "cursor-pointer",
            "rounded",
            "border-gray-300",
            "text-brand",
            "checked:bg-brand",
            "focus:ring-brand"
          )}
        />
        <span className="flex-1 break-all">{todo.title}</span>
        <button onClick={() => handleRemoveTodo(todo.id)}>
          <BsXLg className="cursor-pointer transition-all active:scale-110" />
        </button>
      </div>
    </li>
  )
}

export default memo(TodoCard)
