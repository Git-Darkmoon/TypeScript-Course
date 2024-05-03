let car: { brand: string; year: number } = {
  brand: "BMW",
  year: 2020,
}

let book1 = {
  title: "The Lord of the Rings",
  cost: 10,
}

let book2 = {
  title: "The Lord of the Rings II",
  cost: 30,
}

let book3 = {
  title: "The Lord of the Rings III",
}

let items: { readonly title: string; cost?: number }[] = [book1, book2, book3]
// items[0].title = 'a'
