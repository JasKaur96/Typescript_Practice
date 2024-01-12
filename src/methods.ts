//calculateTax(income: number): number ---> : number is the return type we can give as any also

function calculateTax(income: number, taxYear: number): number {
  // let x =
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

const result1 = calculateTax(90_000, 2023);

const result2 = calculateTax(70_000, 2022);

console.log("res1", result1, "res2", result2);
