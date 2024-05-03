function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0)
}

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(200, 20)
let scoreWithoutPenalty = calculateScore(100)

// using rest operator

function sum(message: string, ...numbers: number[]): string {
  const result: number = numbers.reduce((total, n) => {
    return (total += n)
  }, 0)

  return message + result
}

let result = sum("The total is: ", 1, 2, 3, 4, 5)
console.log(result)

function logMessage(message: string): void {
  console.log(message)
}

// Type Guard
function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2)
  } else {
    console.log(input.toLocaleLowerCase())
  }
}
