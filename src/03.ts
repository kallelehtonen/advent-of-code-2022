import * as fs from "fs";
import { sum } from "./util";

const input = fs.readFileSync("./input/03.txt", "utf-8").trim();

const prioritiesLower = Array.from(Array(26))
  .map((e, i) => i + 97)
  .map((code) => String.fromCharCode(code));
const prioritiesUpper = prioritiesLower.map((letter) => letter.toUpperCase());
const priorities = [...prioritiesLower, ...prioritiesUpper];

const a = (): number => {
  const rows = input.split(/\n/);

  return rows
    .map((row) => {
      const [[...first], [...second]] = [row.slice(0, row.length / 2), row.slice(row.length / 2)];
      const commonType = first.filter((item) => second.includes(item));

      return priorities.indexOf(commonType[0]) + 1;
    })
    .reduce(sum, 0);
};

const b = (): number => {
  const groups = input.match(/(?:.+\n?){3}/g) ?? [];

  return groups
    .map((group) => {
      const [[...first], [...second], [...third]] = group.split(/\n/);
      const commonType = first.filter((type) => second.includes(type) && third.includes(type));

      return priorities.indexOf(commonType[0]) + 1;
    })
    .reduce(sum, 0);
};

console.log(a());
console.log(b());
