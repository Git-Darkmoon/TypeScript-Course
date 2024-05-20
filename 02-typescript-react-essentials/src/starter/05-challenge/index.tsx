type BasicProfileProps = {
  type: "basic"
  name: string
}

type AdvancedProfileProps = {
  type: "advanced"
  name: string
  email: string
}

type ProfileProps = BasicProfileProps | AdvancedProfileProps

function Component(props: ProfileProps) {
  const { type, name } = props
  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>user: {name}</h2>
      </article>
    )
  }

  const { email } = props
  return (
    <article className="alert alert-danger">
      <h2>user: {name}</h2>
      <h2>email: {email}</h2>
    </article>
  )
}
export default Component

// alert-danger
// alert-success
// alert
