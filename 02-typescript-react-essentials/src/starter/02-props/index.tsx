// import { ReactNode } from "react"

import { type PropsWithChildren } from "react"

type ComponentProps = {
  title: string
  id: number
  // children?: React.ReactNode -> for no importing
  // children?: ReactNode
}

// an alternative of setting ourselves the children, would be use the special type PropsWithChildren
type iProps = PropsWithChildren<ComponentProps>

function Component({ title, id, children }: iProps) {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>ID: {id}</h2>
      {children}
    </div>
  )
}
export default Component
