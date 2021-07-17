let userInput: unknown;
let userName: string;


userInput = 5;
userInput = "Jean";

if(typeof userInput === 'string')   {
    userName = userInput;
}

// this function returns....never
// void type on the return is what will be inferred. specify never return type for clarity below
function generateError( message: string, error: number) : never {
    throw( {message, error} );
};

generateError('Something went wrong!', 501);