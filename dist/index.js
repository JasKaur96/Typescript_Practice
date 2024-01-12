"use strict";
let sales = 2213;
let course = "Typescript";
let is_published = true;
let level;
let list = [1, 2, 3, 4];
let userDetails = [1, "Aman"];
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 1] = "Small";
    Size1[Size1["Medium"] = 2] = "Medium";
    Size1[Size1["Large"] = 3] = "Large";
})(Size1 || (Size1 = {}));
let mySize1 = Size1.Medium;
let mySize2 = 2;
console.log("mySize", mySize1, mySize2);
function render(document) {
    console.log("render", document);
}
//# sourceMappingURL=index.js.map