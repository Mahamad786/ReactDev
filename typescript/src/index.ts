let age = 20;
console.log(age)

let empname: string = "Muhammad";
console.log(empname)
const emplist: [number, string] = [10,'string'];
console.log(emplist)

type Emp = {
    name: string,
    id: number
}

const obj: Emp = {
    name: "abc",
    id: 100
}

obj.id = 100;

enum Size {Small=0, Medium, Large}

console.log(Size.Large)