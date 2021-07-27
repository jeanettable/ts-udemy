// on Function types, and functions that return functions:
function add(n1: number, n2: number)    {
    return n1 + n2;
}

let combinedValues :(a: number, b: number ) => number;

combinedValues = add;

function addAndHandle(n1: number, n2: number, cb: (result: number) => void )  : void {
    const result = n1 + n2;
    cb(result);
};

// no need for console log, because build into cb
addAndHandle(33, 2, (num) => {console.log(num)} );


console.log(combinedValues(4, 11));

function merge<T extends object, U extends object> (obj1: T, obj2: U)   {
    return Object.assign(obj1, obj2);
};

console.log(merge({ name: "Jeanette", hobbies: ["coding", "hiking", "dancing"] }, { age: 33 } ));


interface Lengthy {
    length: number;
}

// generic function with constraint of the element having to have a length property, leveraged by interface ^
function countAndPrint<T extends Lengthy>(element: T) : [T, string] {
    let descriptionText = "Got nothing.";
    if(element.length === 1)    {
        descriptionText = "Got one value.";
    } else if( element.length > 1)  {
        descriptionText = "Got" + element.length + "elements!";
    }
    return [element, descriptionText];
}

console.log(countAndPrint( ["Hiking", "Cooking"] ));

// using keyof for object checking:
function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U)    {
    return obj[key];
};

console.log(extractAndConvert({ name: "Jeanette"}, 'name' ));