import * as fs from "fs";
import { sum } from "./util";

const input = fs.readFileSync("./input/01.txt", "utf-8").trim();
const elves = input.split(/\n\s*\n/);

const totalCaloriesByElf = elves.map((elf) => {
  const calories = elf.trim().split(/\n/).map(Number);

  return calories.reduce(sum, 0);
}).sort((a, b) => b - a);

const a = (): number => {
  return totalCaloriesByElf[0];
};

const b = (): number => {
  return totalCaloriesByElf.slice(0, 3).reduce(sum, 0);
};

console.log(a());
console.log(b());
