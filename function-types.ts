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
