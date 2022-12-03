import * as fs from "fs";
import { sum } from "./util";

const input = fs.readFileSync("./input/02.txt", "utf-8").trim();

/**
 * a, b
 *
 * a =>
 * A: Rock
 * B: Paper
 * C: Scissors
 *
 * b =>
 * X: Rock
 * Y: Paper
 * Z: Scissors
 *
 * rock = 1 pts
 * paper = 2 pts
 * scissors = 3 pts
 *
 * lost = 0 pts
 * draw = 3 pts
 * won = 6 pts
 */

const points = {
  "A": 1,
  "B": 2,
  "C": 3,
  "X": 1,
  "Y": 2,
  "Z": 3,
};

const a = (): number => {
  return input.split(/\n/)
    .map((round) => round.split(" "))
    .map(([a, b]): number => {
      if (points[a] === points[b]) {
        return 3 + points[b];
      }

      if (points[a] - points[b] === -1 || points[a] - points[b] === 2) {
        return 6 + points[b];
      }

      return 0 + points[b];
    })
    .reduce(sum, 0);
};

const b = (): number => {
  return input.split(/\n/)
    .map((round) => round.split(" "))
    .map(([a, b]): number => {
      if (b === "Y") {
        return 3 + points[a];
      }

      if (b === "Z" && a === "C") {
        return 7;
      }

      if (b === "Z") {
        return 7 + points[a];
      }

      if (b === "X" && a === "A") {
        return 3;
      }

      return points[a] - 1;
    })
    .reduce(sum, 0);
};

console.log(a());
console.log(b());
