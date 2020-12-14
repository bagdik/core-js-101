/* eslint-disable no-console */
// function extractNameFromTemplate() {
//   const firstName = 'John';
//   const lastName = 'Doe';
//   // const strTemplate = `Hello, ${firstName} ${lastName}!`;
//   function f(litArr, ...val) {
//     console.log(litArr, val);
//   }
//   return f`Hello, ${firstName} ${lastName}!`;
// }

// eslint-disable-next-line no-console
// console.log('result: ', extractNameFromTemplate('Hello, John Doe!'));

// const name = 'Jack';
// function toUppercase(litArr, val) {
//   console.log(litArr, val);
//   return val;
//

// function generateOdds(len) {
//   const arr = new Array(len);
//   arr.fill(1);
//   return arr.map((item, index) => (index === 0 ? item : item + 2 * index));
// }

// console.log(generateOdds(7));

// function removeFirstOccurrences(str, value) {
//   const start = str.indexOf(value);
//   const end = start + value.length;
//   return str.slice(0, start).concat(str.slice(end, str.length));
// }


// function getRectangleString(width, height) {
//   function header(w) {
//     let str = '';
//     for (let i = 0; i < w; i += 1) {
//       if (i === 0) {
//         str += '\u250C';
//       } else if (i === w - 1) {
//         str += '\u2510\n';
//       } else {
//         str += '\u2500';
//       }
//     }
//     return str;
//   }
//   function body(w, h) {
//     let str = '';
//     for (let j = 1; j < h - 1; j += 1) {
//       for (let i = 0; i < w; i += 1) {
//         if (i === 0) {
//           str += '\u2502';
//         } else if (i === w - 1) {
//           str += '\u2502\n';
//         } else {
//           str += ' ';
//         }
//       }
//     }
//     return str;
//   }
//   function footer(w) {
//     let str = '';
//     for (let i = 0; i < w; i += 1) {
//       if (i === 0) {
//         str += '\u2514';
//       } else if (i === w - 1) {
//         str += '\u2518\n';
//       } else {
//         str += '\u2500';
//       }
//     }
//     return str;
//   }
//   return `${header(width)}${body(width, height)}${footer(width)}`;
// }

// function encodeToRot13(str) {
//   let cipher = '';
//   for (let i = 0; i < str.length; i += 1) {
//     console.log('code: ', str[i].charCodeAt());
//     cipher += str[i].charCodeAt() - 97 < 13 ? String.fromCharCode(str[i].charCodeAt() + 13)
//       : String.fromCharCode(str[i].charCodeAt() - 13);
//   }
//   return cipher;
// }
// console.log(encodeToRot13('Why did the chicken cross the road?'));

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i += 1) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(4));

// function toNumber(value, def) {
//   return (typeof Number(value) === 'number' ? Number(value) : def);
// }
// console.log(toNumber(NaN, 0));

// function removeFalsyValues(arr) {
//   return arr.filter((item) => Boolean(item) !== false);
// }
// console.log(removeFalsyValues([0, false, 'cat', NaN, true, '']));

// function sortDigitNamesByNumericOrder(arr) {
//   const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   return arr.sort((a, b) => (nums.indexOf(a) > nums.indexOf(b) ? 1 : -1));
// }

// console.log(sortDigitNamesByNumericOrder(['nine', 'one']));

// function sortCitiesArray(arr) {
//   return arr.sort((a, b) => {
//     if (a.country !== b.country) {
//       return a.country > b.country ? 1 : -1;
//     }
//     return a.city > b.city ? 1 : -1;
//   });
// }
// console.log(sortCitiesArray([
//   { country: 'Russia', city: 'Moscow' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Warsaw' },
//   { country: 'Russia', city: 'Saint Petersburg' },
//   { country: 'Poland', city: 'Krakow' },
//   { country: 'Belarus', city: 'Brest' },
// ]));

// function selectMany(arr, childrenSelector) {
//   return arr.map((item) => childrenSelector(item)).flat();
// }
// console.log(selectMany([[1, 2], [3, 4], [5, 6]], (x) => x));
// console.log(selectMany(['one', 'two', 'three'], (x) => x.split('')));

// function getElementByIndexes(arr, indexes) {
//   return indexes.reduce((res, idx) => res[idx], arr);
// }
// console.log(getElementByIndexes([[1, 2], [3, 4], [5, 6]], [0, 0]));
// console.log(getElementByIndexes(['one', 'two', 'three'], [2]));
// function swapHeadAndTail(arr) {
//   const head = arr.slice(0, Math.floor(arr.length / 2));
//   const tail = arr.slice(-Math.floor(arr.length / 2));
//   console.log('head = ', head);
//   console.log('tail = ', tail);
//   return arr.length % 2 !== 0 && arr.length !== 1
//     ? tail.concat(arr[Math.floor(arr.length / 2)]).concat(head)
//     : tail.concat(head);
// }
// console.log(swapHeadAndTail([1]));

// function group(array, keySelector, valueSelector) {
//   const map = new Map();
//   return array.reduce((res, item) => {
//     if (!map.has(keySelector(item))) {
//       return map.set(keySelector(item), [valueSelector(item)]);
//     }
//     return map.get(keySelector(item)).push(valueSelector(item));
//   }, map);
// }
// console.log(group([
//   { country: 'Belarus', city: 'Brest' },
//   { country: 'Russia', city: 'Omsk' },
//   { country: 'Russia', city: 'Samara' },
//   { country: 'Belarus', city: 'Grodno' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Lodz' },
// ],
// (item) => item.country,
// (item) => item.city));
// function distinct(arr) {
//   return arr.reduce((res, item) => {
//     if (!res.includes(item)) {
//       res.push(item);
//     }
//     return res;
//   }, []);
// }
// console.log(distinct([1, 2, 3, 3, 2, 1]));

// function propagateItemsByPositionIndex(arr) {
//   return arr.reduce((res, item, index) => {
//     const tmpArr = new Array(index + 1).fill(item);
//     return res.concat(tmpArr);
//   }, []);
// }
// console.log(propagateItemsByPositionIndex([1, 2, 3, 4, 5]));

// function getIdentityMatrix(n) {
//   const matrix = new Array(n).fill(new Array(n));
//   console.log('matrix: ', matrix);
//   return matrix.map((item, index) => {
//     const row = item.fill(0).slice();
//     row[index] = 1;
//     return row;
//   });
// }
// console.log(getIdentityMatrix(5));
function getIntervalArray(start, end) {
  const arr = new Array(end + 1 - start).fill(0);
  return arr.map((item, index) => item + start + index);
}
console.log(getIntervalArray(-2, 2));
