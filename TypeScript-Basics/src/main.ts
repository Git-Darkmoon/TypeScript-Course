import "./style.css"
import typescriptLogo from "./typescript.svg"
import viteLogo from "/vite.svg"
import { setupCounter } from "./counter.ts"
// import "./tutorial.ts"
// import "./arrays.ts"
// import "./objects.ts"
// import "./functions.ts"
// import "./optionalParams.ts"
// import "./objectParams.ts"
// import "./typeAlias.ts"
// import "./inferfaces.ts"
// import "./tuples.ts"
// import "./enum.ts"
// import "./typeAssertion.ts"
// import "./modules.ts"
// import "./typeGuards.ts"
// import "./generics.ts"
// import "./fetchData.ts"
// import "./class.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)
