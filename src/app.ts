/*eslint-disable */
const nome: string = 'roger'; //qualquer string
const age = 30; // Number 10, 1.52, -5,55, 0xf00d, 0b1010, 0o7744
const adult = true; // true or false ONLY
const simbolo = Symbol('some-Symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
const arrayNum: Array<number> = [123, 123, 123, 123];
const arrayNum2: Number[] = [456, 456, 456];
const arrayString: Array<String> = ['213', '213fe'];
// eslint-disable-next-line prettier/prettier
const arrayString2: string[] = ["456", '456', `123`];

// objetos
const person: { name: string, age: number, adult?: boolean } = {
  name: 'teste',
  age: 123,
  adult: age >= 18 ? true : false,
};

// function
function sum(x: number, y: number, ...args: number[]): number {
  let total = x + y;
  for (let i of args) {
    total += i
  }
  return total;
}
// another way
const multi: (x: number, y: number, ...args: number[]) => number = (x, y, ...args) => {
  let total = x * y;
  for (let i of args) {
    total *= i
  }
  return total;
}