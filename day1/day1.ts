import input from "./input";

function firstDigit(line: string): string {
  const match = line.match(/\d/);
  if (!match) {
    throw new Error("firstDigit: no digit found");
  }
  return match[0];
}

function reverseString(s: string): string {
  const arr = s.split("");
  arr.reverse();
  return arr.join("");
}

function lastDigit(line: string): string {
  return firstDigit(reverseString(line));
}

function lineValue(line: string): number {
  return Number(firstDigit(line)) * 10 + Number(lastDigit(line));
}

function plus(a: number, b: number): number {
  return a + b;
}

function partA(): number {
  return input.map(lineValue).reduce(plus);
}

console.log(partA());
