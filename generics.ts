//Generics: for better type safety!

// const names = ['Jeanette', 'Max'];
// declare the above instead as in TS:
const names : Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
// inclusion of the generic type above allows us to infer and use string methods on the promise's return value
promise.then((result) => {
    result.toUpperCase();
});
// showcase inability to infer on wrong or any types
// const promise2: Promise<number> = new Promise((resolve, reject) => {
// const promise2: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });
// // now will throw an error for a string method, since doe snot yield a string
// promise2.then((result) => {
//     result.toUpperCase();
// });
