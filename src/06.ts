import * as fs from "fs";

const input = fs.readFileSync("./input/06.txt", "utf-8").trim();

const findMarker = (size: number): number => {
  for (let i = 0; i < input.length; i++) {
    const signal = new Set([...input.slice(i, i + size)]);

    if (signal.size === size) {
      return i + size;
    }
  }

  return 0;
}

const a = (): number => {
  return findMarker(4);
};

const b = (): number => {
  return findMarker(14);
};

console.log(a());
console.log(b());
