// Usually the return type is inferred by TS
// but we can specify it explicitly

function Component(): JSX.Element | null | string {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  )
}
export default Component
