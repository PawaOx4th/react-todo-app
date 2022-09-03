import React from "react"
import { BsGithub } from "react-icons/bs"
import { FOOTER } from "../utils/constant"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="flex justify-end bg-dark p-3 text-mid">
      <a href={FOOTER.GITHUB} target={"_blank"}>
        <div className="flex items-center gap-3">
          <BsGithub />
          <strong>{FOOTER.PROJECT_NAME}</strong>
        </div>
      </a>
    </footer>
  )
}

export default Footer
