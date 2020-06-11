// Code goes here!

function merge<T,U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Bob', hobbies: ['Sports']}, {age: 30});

console.log(mergeObj);