"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
const result1 = calculateTax(90000, 2023);
const result2 = calculateTax(70000, 2022);
console.log("res1", result1, "res2", result2);
//# sourceMappingURL=methods.js.map