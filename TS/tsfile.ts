interface user {
    name?: string;
    surname: string;
}

const obj: user = {
    name: `John`,
    surname: `Smith`
};
obj.name = `Pete`;
delete obj.name;

type myCustomType = Array<number>;
const list: myCustomType = [1, 2, 3, -1, -2, -3];
const list2: myCustomType = [1, 2, 3, 4, 5];

function foo(arg: myCustomType): boolean {
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] < 0) return false;
    }
    return true
}

foo(list);
foo(list2);

console.log(foo(list));
console.log(foo(list2));
console.log(obj);