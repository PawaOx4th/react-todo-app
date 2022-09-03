import React, { memo, useState } from "react"
import clsx from "clsx"
import { BsFileEarmarkPlusFill } from "react-icons/bs"

type Props = {
  handleCreateTodo: ({ title }: { title: string }) => boolean
}

function TodoInput({ handleCreateTodo }: Props) {
  const [title, setTitle] = useState("")
  return (
    <form
      className=" col-span-12 mt-4 flex gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        const isSuccess = handleCreateTodo({
          title
        })

        isSuccess && setTitle("")
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
  )
}

export default memo(TodoInput)
