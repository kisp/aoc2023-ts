import input from "./input"

function plus(a: number, b: number): number {
  return a + b
}

function reverseString(s: string): string {
  const arr = s.split("")
  arr.reverse()
  return arr.join("")
}

function firstDigit(line: string): string {
  const match = line.match(/\d/)
  if (!match) {
    throw new Error("no digit found")
  }
  return match[0]
}

function lastDigit(line: string): string {
  return firstDigit(reverseString(line))
}

function lineValuePartA(line: string): number {
  return Number(firstDigit(line)) * 10 + Number(lastDigit(line))
}

function lineValuePartB(line: string): number {
  return Number(firstDigit(line)) * 10 + Number(lastDigit(line))
}

function partA(): number {
  return input.map(lineValuePartA).reduce(plus)
}

function partB(): number {
  return input.map(lineValuePartB).reduce(plus)
}

console.log(partA())
console.log(partB())
