let sales: number = 2213;
let course: string = "Typescript";
let is_published: boolean = true;
let level;
let list: number[] = [1, 2, 3, 4]; //Array

let userDetails: [number, string] = [1, "Aman"]; //tuple

// const Small = 1;
// const Medium = 2;
// const Large = 3;

enum Size1 {
  Small = 1,
  Medium,
  Large,
}

let mySize1: Size1 = Size1.Medium;

// enum as const

const enum Size2 {
  Small = 1,
  Medium,
  Large,
}
let mySize2: Size2 = Size2.Medium;

console.log("mySize", mySize1, mySize2);

function render(document: any) {
  console.log("render", document);
}
