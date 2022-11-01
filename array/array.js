
/*

Array.length

returns the number of elements in array

*/

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

/*

new Array(Length);

make a empty array of given length

Length should be positive

*/

const list = new Array(6);
console.log(list.length);

// const list = new Array(-6);       give an error Invalid array length
// console.log(list.length);


const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
// console.log(arrIter.next().value); // a
// console.log(arrIter.next().value); // b
// console.log(arrIter.next().value); // c
// console.log(arrIter.next().value); // d
// console.log(arrIter.next().value); // e

console.log(arrIter.next().value)



