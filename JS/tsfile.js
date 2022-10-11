"use strict";
const obj = {
    name: `John`,
    surname: `Smith`
};
obj.name = `Pete`;
delete obj.name;
const list = [1, 2, 3, -1, -2, -3];
const list2 = [1, 2, 3, 4, 5];
function foo(arg) {
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] < 0)
            return false;
    }
    return true;
}
foo(list);
foo(list2);
console.log(foo(list));
console.log(foo(list2));
console.log(obj);
