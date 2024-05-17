class Book {
  public readonly title: string
  author: string
  private assigned: boolean = false

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  public assign() {
    this.assigned = this.toggleStatus()
  }

  public isAssigned() {
    return this.assigned
  }

  private toggleStatus() {
    return !this.assigned
  }

  public get info(): string {
    return `${this.title} by ${this.author}`
  }

  public set owner(author: string) {
    this.author = author
  }
}

let book = new Book("The Lord of the Rings", "J.R.R. Tolkien")

console.log(book)
book.assign()
console.log(book.isAssigned())
console.log(book.info)
book.author = "J.K. Rowling"
