
/*

Array.length

returns the number of elements in array

*/

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

// we can increase the length of array with help of length property like

clothing.length = 12

console.log(clothing.length); // wil give 12


/*

new Array(Length);

make a empty array of given length

Length should be positive

*/

const list = new Array(6);
console.log(list.length);
console.log()

// const list = new Array(-6);   //    give an error Invalid array length
// console.log(list.length);


/*

Array with non-writable length
 
but we have to use "use strict" mode

*/


"use strict";

const numbers = [1, 2, 3, 4, 5];

Object.defineProperty(numbers, "length", { writable: false });

// numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'

// numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'



/*

Array.at()

take a integer value as parameter
if value positive calculate from front side start with 0
if value negative calculate from back side start with 1
if any of them out of range than it return undefined

*/


const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

index = 22;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is undefined"

index = -23;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is undefined"


console.log()


/*

Calling at() on non-array objects 
like string work
number not work give undefined (no error)
object work but have to define length and key should be array index bassed 0,1,2,3......
rule same as above

*/


const arrayLike1 = "abcdefghi"
console.log(Array.prototype.at.call(arrayLike1, 2)); // c

const arrayLike2 = 45366
console.log(Array.prototype.at.call(arrayLike2, -3)); // undefined

const arrayLike3 = {
    length: 3,
    0: "a",
    1: "b",
    2: 98
};
console.log(Array.prototype.at.call(arrayLike3, 2)); // 98
console.log()


/*

Array.concat()

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

*/

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const numbhers = num1.concat(num2);
console.log(numbhers)


/*

Using concat() on sparse arrays
If any of the source arrays is sparse, the resulting array will also be sparse

*/

console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]


/*

Concate non array 
like objects , string , number

*/


const obj1 = { dgd: 1, 1: 2, 2: 3, };
const obj2 = { 0: 1, 1: 2, 2: 3, };
const rr = [0].concat(obj1, obj2, 123, "abc")
console.log(rr);
[
    0,
    { '1': 2, '2': 3, dgd: 1 },
    { '0': 1, '1': 2, '2': 3 },
    123,
    'abc'
]

console.log()

/*

Array.copyWithin()

copies element of an array to another location in the same array and returns it without modifying its length.

Syntax

copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)

Parameters

# target
Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.

If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.

# start (Optional)
Zero-based index at which to start copying elements from. If negative, start will be counted from the end.

If start is omitted, copyWithin will copy from index 0.

# end (Optional)
Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.

If end is omitted, copyWithin will copy until the last index (default to arr.length).

Return value
The modified array.

Rule 

1 Pick element from start index if +ve than front side -ve back side (default 0)
2 pick element to end index 
                        if end +ve 
                                    if end given => pick end-1
                                    if start given end not given => pick last index
                                    if start and end both not given => 
                                                                        if target +ve => pick target -1
                                                                        if target -ve => pick target from last
                        if end -ve 
                                    if end given => pick end from last
                                    if start given end not given => pick end -1 
                                    if start and end both not given => pick target-1 index
                        Default
                                if +ve pick target-1
                                if -ve target from last
*/

const arra0 = ['a', 'b', 'c', 'd', 'e'];
const arra1 = ['a', 'b', 'c', 'd', 'e'];
const arra2 = ['a', 'b', 'c', 'd', 'e'];
const arra3 = ['a', 'b', 'c', 'd', 'e'];
const arra4 = ['a', 'b', 'c', 'd', 'e'];
const arra5 = ['a', 'b', 'c', 'd', 'e'];

console.log(arra0.copyWithin(0))
console.log(arra1.copyWithin(1))
console.log(arra2.copyWithin(2))
console.log(arra3.copyWithin(3))
console.log(arra4.copyWithin(4))
console.log(arra5.copyWithin(5))
console.log()

/*

[ 'a', 'b', 'c', 'd', 'e' ] 0
[ 'a', 'a', 'b', 'c', 'd' ] 1 abcde => aabcde => aabcd
[ 'a', 'b', 'a', 'b', 'c' ] 2 abcde => ababcde => ababc
[ 'a', 'b', 'c', 'a', 'b' ] 3 abcde => abcabcde => abcab
[ 'a', 'b', 'c', 'a', 'b' ] 4 abcde => abcdabcde => abcda
[ 'a', 'b', 'c', 'a', 'b' ] 5 abcde => abcde => abcde

*/

const _arra0 = ['a', 'b', 'c', 'd', 'e'];
const _arra1 = ['a', 'b', 'c', 'd', 'e'];
const _arra2 = ['a', 'b', 'c', 'd', 'e'];
const _arra3 = ['a', 'b', 'c', 'd', 'e'];
const _arra4 = ['a', 'b', 'c', 'd', 'e'];
const _arra5 = ['a', 'b', 'c', 'd', 'e'];

console.log(_arra0.copyWithin(-0))
console.log(_arra1.copyWithin(-1))
console.log(_arra2.copyWithin(-2))
console.log(_arra3.copyWithin(-3))
console.log(_arra4.copyWithin(-4))
console.log(_arra5.copyWithin(-5))
console.log()

/*

[ 'a', 'b', 'c', 'd', 'e' ] -0
[ 'a', 'a', 'b', 'c', 'd' ] -1 abcde => abcdae => abcda
[ 'a', 'b', 'a', 'b', 'c' ] -2 abcde => abcabde => abcab
[ 'a', 'b', 'c', 'a', 'b' ] -3 abcde => ababccde => ababc
[ 'a', 'b', 'c', 'a', 'b' ] -4 abcde => aabcdbcde => aabcd
[ 'a', 'b', 'c', 'a', 'b' ] -5 abcde => abcdeabcde => abcde

*/

const __arra0 = ['a', 'b', 'c', 'd', 'e'];
const __arra1 = ['a', 'b', 'c', 'd', 'e'];
const __arra2 = ['a', 'b', 'c', 'd', 'e'];
const __arra3 = ['a', 'b', 'c', 'd', 'e'];
const __arra4 = ['a', 'b', 'c', 'd', 'e'];
const __arra5 = ['a', 'b', 'c', 'd', 'e'];

console.log(__arra0.copyWithin(0, 2))
console.log(__arra1.copyWithin(1, 4))
console.log(__arra2.copyWithin(2, 1))
console.log(__arra3.copyWithin(3, -1))
console.log(__arra4.copyWithin(4, -3))
console.log(__arra5.copyWithin(5, -5))
console.log()


/*

[ 'a', 'b', 'c', 'd', 'e' ] 0 , 2  abcde => 'abc'cdede => cdede
[ 'a', 'a', 'b', 'c', 'd' ] 1 , 4  abcde => ae'b'cde => aecde
[ 'a', 'b', 'a', 'b', 'c' ] 2 , 1  abcde => ab'cde'bcde => abbcd
[ 'a', 'b', 'c', 'a', 'b' ] 3 , -1 abcde => abc'd'ee => abcee
[ 'a', 'b', 'c', 'a', 'b' ] 4 , -3 abcde => abcd'e'cde => abcdc
[ 'a', 'b', 'c', 'a', 'b' ] 5 , -5 abcde => abcde => abcde

*/


/*

Array.prototype.entries()

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

*/


const aray1 = ['a', 'b', 'c'];
const iterator1 = aray1.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]
console.log()


const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
    console.log(index, element);
}
console.log()
// 0 'a'
// 1 'b'
// 2 'c


const array = ["a", "b", "c"];
const arrayEntries = array.entries(); // { value: [ 0, 'a' ], done: false }
console.log(arrayEntries.next())
for (const element of arrayEntries) {
    console.log(element);
}
console.log()

// [0, 'a']
// [1, 'b']
// [2, 'c']


/*

Array.prototype.every()

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

if all pass return true
if any fail return false

*/

const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
console.log()

/*

Array.prototype.fill()

The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

Syntax

fill(value)
fill(value, start)
fill(value, start, end)

Parameters
value
Value to fill the array with. (Note all elements in the array will be this exact value.)

start Optional
Start index (inclusive), default 0.

end Optional
End index (exclusive), default arr.length.

Return value
The modified array, filled with value.

fill is a mutator method: it will change the array itself and return it, not a copy of it.

*/


console.log([1, 2, 3].fill(4));                // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1));             // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2));          // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1));          // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3));          // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2));        // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN));      // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5));          // [1, 2, 3]
console.log(Array(3).fill(4));                 // [4, 4, 4]

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi";              // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr)
console.log()


/*

Array.prototype.filter()

The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
If no elements pass the test, an empty array will be returned.

*/


const arar = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

const arrByID = arar.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5


console.log()
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
console.log()



/*

Array.prototype.find()

The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

*/


function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
console.log()

/*

Array.prototype.findIndex()

The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

*/

function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
console.log()


/*

Array.prototype.findLast()

The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.


const arrfay1 = [5, 12, 50, 130, 44];

const found = arrfay1.findLast((element) => element > 45);

console.log(found);
// expected output: 130

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'fish', quantity: 1 },
    { name: 'cherries', quantity: 5 }
];

// return true inventory stock is low
function isNotEnough(item) {
    return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
  // { name: "fish", quantity: 1 }


*/    // not supported


/*

Array.prototype.findLastIndex()

The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.


function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }

  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5

*/    // not supported



/*

Array.prototype.flat()

The flat() method creates a new array with all sub - array elements concatenated into it recursively up to the specified depth.

Syntax

flat()
flat(depth)

The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

A new array with the sub-array elements concatenated into it.

*/

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]











/*
[ 'a', 'b', 'c', 'd', 'e' ] 0
[ 'a', 'a', 'b', 'c', 'd' ] 1 abcde => aabcde => aabcd
[ 'a', 'b', 'a', 'b', 'c' ] 2 abcde => ababcde => ababc
[ 'a', 'b', 'c', 'a', 'b' ] 3 abcde => abcabcde => abcab
[ 'a', 'b', 'c', 'a', 'b' ] 4 abcde => abcdabcde => abcda
[ 'a', 'b', 'c', 'a', 'b' ] 5 abcde => abcde => abcde
Array.forEach()

break keyword not support in forEach
this keyword support only function not arrow function
in arrow function this keyword not support
return nothing return keyword also not work
*/

// console.log()

// const arr = ["a", "b", "c", "d", "e"];
// let t;
// arr.forEach((ele, idx, array) => {
//     console.log(ele, idx, array, this)
//     t = ele
// })


// console.log(t)







