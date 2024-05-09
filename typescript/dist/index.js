"use strict";
let age = 20;
console.log(age);
let empname = "Muhammad";
console.log(empname);
const emplist = [10, 'string'];
console.log(emplist);
const obj = {
    name: "abc",
    id: 100
};
obj.id = 100;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Large);
//# sourceMappingURL=index.js.map