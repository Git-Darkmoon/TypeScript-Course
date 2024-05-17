function genericFunction<T>(arg: T): T {
  return arg
}

const someStringValue = genericFunction<string>("Hello world")
const someNumberValue = genericFunction<number>(12)

type GenericType<T> = {
  value: T
  getValue: () => T
}

const genericString: GenericType<string> = {
  value: "Hello World",
  getValue() {
    return this.value
  },
}

async function someFunc(): Promise<string> {
  return "Hello World"
}

// ----- Challenge -----
//  createArray<string>(3,'hello') -> ["hello","hello","hello"]

function createArray<T>(length: number, value: T): T[] {
  let result: T[] = Array(length).fill(value)
  return result
}

console.log(createArray<string>(3, "hello"))
console.log(createArray<number>(4, 42))

// ---- More than one generic type ----

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}

let sample = pair<string, number>("hello", 42)

// **** Usage

// const [name,setName] = useState('')
// const [products,setProducts] = useState<Product[]>([])
// axios.get<Product[]>(URL)

// Although TS can infer the type in a lot of situations
// the best practice is to be explicit with the desired
// result, i.e in the hook useState, in the first example
// it can infer the type to be string, but what if we
// assign a number or other type with the setName ?
// so the best is to be explicit like the example in
// products, all the hooks have a generic type so we need
// to put the desired type.

// ---- Default Type ----

interface StoreData<T = any> {
  data: T[]
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
}

const randomStuff: StoreData = {
  data: ["random", 12],
}
