import * as fs from "fs";

const generateStacks = (board: string): string[][] => {
  const rows = board.split(/\n/);
  const stackNumbers = rows[rows.length - 1].match(/.{1,4}/g)?.map((value) => parseInt(value.trim(), 0)) ?? [];
  const stacks: string[][] = stackNumbers.map((_) => []);

  for (let i = rows.length - 2; i >= 0; i--) {
    const crates = rows[i].match(/.{1,4}/g) ?? [];

    for (let j = 0; j < crates.length; j++) {
      const crate = crates[j].match(/\w+/g)?.at(0) ?? null;
      if (crate) {
        stacks[j].unshift(crate);
      }
    }
  }

  return stacks;
};

const input = fs.readFileSync("./input/05.txt", "utf-8");
const [board, instructionsString] = input.split(/\n\s*\n/);
const instructions = instructionsString.trim().split(/\n/);

const a = (): string => {
  const stacks = generateStacks(board);

  instructions.forEach((instruction: string) => {
    const [amount, from, to] = instruction.match(/\d+/g)?.map(Number) ?? [];

    stacks[from - 1]
      .splice(0, amount)
      .map((crate) => {
        stacks[to - 1].unshift(crate);
      });
  });

  return stacks.map((stack) => stack.at(0)).join("");
};

const b = (): string => {
  const stacks = generateStacks(board);

  instructions.forEach((instruction: string) => {
    const [amount, from, to] = instruction.match(/\d+/g)?.map(Number) ?? [];

    stacks[from - 1]
      .splice(0, amount)
      .reverse()
      .map((crate) => {
        stacks[to - 1].unshift(crate);
      });
  });

  return stacks.map((stack) => stack.at(0)).join("");
};

console.log(a());
console.log(b());
