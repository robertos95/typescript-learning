// Code goes here!

function merge<T extends object,U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Bob', hobbies: ['Sports']}, {age: 30});

console.log(mergeObj);