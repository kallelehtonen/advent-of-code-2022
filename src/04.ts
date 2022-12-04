import * as fs from "fs";
import { sum } from "./util";

const input = fs.readFileSync("./input/04.txt", "utf-8").trim();
const rows = input.split(/\n/);

const convertRangeToArray = (range: string): number[] => {
  const [min, max] = range.split("-").map(Number);
  return Array.from({ length: max - min + 1 }, (_, n) => n + min);
};

const a = (): number => {
  return rows
    .map((row) => {
      const [firstRange, secondRange] = row.split(",");
      const first = convertRangeToArray(firstRange);
      const second = convertRangeToArray(secondRange);

      return first.every((v) => second.includes(v)) || second.every((v) => first.includes(v)) ? 1 : 0;
    })
    .reduce(sum, 0);
};

const b = (): number => {
  return rows
    .map((row) => {
      const [firstRange, secondRange] = row.split(",");
      const first = convertRangeToArray(firstRange);
      const second = convertRangeToArray(secondRange);

      return first.some((v) => second.includes(v)) || second.some((v) => first.includes(v)) ? 1 : 0;
    })
    .reduce(sum, 0);
};

console.log(a());
console.log(b());
