// let userCardNum = prompt('Karta raqamini kiriting:');
// let userCardNumber = +userCardNum;
// let userEnteredNumLength = userCardNum.length;

// if (userEnteredNumLength == 16 && +userCardNum) {
//     alert('Karta raqamingiz qabul qilindi!');
// } else {
//     alert('Karta raqami kiritishda xatolik bor!');
// }


// const myName = {
//     name: "Yusuf",
// }
// myName.name = "Sardor";
// console.log(myName);

// console.log(age);
// let age = 17;

// function toBinary(n) {
//     let b = n.toString(2);
//     return b;
// }

// let resulr = toBinary(5);
// alert(resulr);

// ! Function Declaration
// function plus(son1, son2) {
//     console.log(son1 + son2);
//     return son1 + son2 + 10;
// }
// const func = plus;
// console.log(func(1, 1));

// ! Function Expression
// const sayHi = function (age) {
//     console.log(`Your age is ${age}`);
//     return age;
// }
// let var2 = sayHi;
// console.log(var2(1));

// ! Arrow Function
// const sayHi = str => {
//     console.log(str)
//     return 0
// };
// let const2 = sayHi();
//  sayHi("Hello World")
// console.log(const2);

// const var2 = null;
// console.log(null === null);

// let person = {
//     name: "Sardor",
//     age: 17,
// }

// let occupation = {
//     name: "Bilol",
//     job: "Programmer",
// }
// let fromEntries = Object.fromEntries([['x', 15], ['y', 10]]);
// console.log(fromEntries);
// let person2 = Object.assign({}, occupation, person, fromEntries);
// console.log(person2 === occupation);
// person2.job = "Frontend Developer";
// console.log(person2);
// console.log(occupation);

// let objectKeys = Object.keys(person2);
// console.log(objectKeys);
// let values = Object.values(person2);
// console.log(values);
// let entries = Object.entries(person2);
// console.log(entries);
// let fromEntries2 = Object.fromEntries(entries);
// console.log(fromEntries2);

// let x = ''.split('');
// let arr = confirm();
// console.log(arr);

// let obyekt = Object.create(person, { a: "Samar" });
// console.log(obyekt);

// let x = '9';
// let y = '2';
// console.log(Number(x) + Number(y));
// console.log(Number(NaN));
// console.log(Boolean(NaN));
// a = 0;
// b = 0;
// result = (a !== null && a !== undefined) ? a : b;
// console.log(result);
// let res;
// console.log(res);

// let array = [1, 2, 3, 4, 5];
// let array2 = array.findIndex((item) => {
//     return item == 1;
// });
// console.log(array2);

// let str = 'Hello\nWorld';
// let str2 = str.split(' ');
// console.log(str2);
// console.log(str2.join(''));
// console.log(Array.isArray(str2));
// console.log(str);
// let num = 1.05 + Number.EPSILON;
// console.log(isFinite(1.5));
// console.log(parseInt('12Hello World 12'));
// console.log(parseFloat('12.19Hello World 12'));

// ! DOM

//let width = window.innerHeight; // ! brauzer width | height
//console.log(width);
//console.log(navigator.userAgent); // ! brauzer haqida
//console.log(navigator.platform);
//console.log(location.href); // ! brauzer ssilkasi

// let html = document.documentElement;
// console.log(html);
// let body = document.body;
// console.log(body);
// let head = document.head;
// console.log(head);

// ! Codewars * Simple string characters

// let s = "aRdoR12345#%^";
// function solve(s) {
//     let upperCase = 0;
//     let lowerCase = 0;
//     let numbers = 0;
//     let specialCharacter = 0;
//     s.split('').forEach(letter => {
//         if (/[A-Z]/.test(letter)) {
//             upperCase++;
//         } else if (/[a-z]/.test(letter)) {
//             lowerCase++;
//         } else if (/[0-9]/.test(letter)) {
//             numbers++;
//         } else {
//             specialCharacter++;
//         }
//     });

//     return [upperCase, lowerCase, numbers, specialCharacter];
// }

// console.log(solve(s));

// ! Codewars * Fix My Phone Numbers!

// let str3 = "fdgf64574575dfhd";
// function isItANum(str) {
//     let str2 = '';
//     str.split('').forEach(letter => {
//         if (/[0-9]/.test(letter)) {
//             str2 += letter;
//         }
//     })

//     if (str2.startsWith('0') && str2.length == 11) {
//         return str2;
//     } else {
//         return "Not a phone number";

//     }
// }

// console.log(isItANum(str3));

// ! Codewars * Are the numbers in order?

// let arr2 = [1, 2, 4, 7, 19];
// function inAscOrder(arr) {
//     let arr3 = []
//     arr.forEach(element => {
//         return arr3.push(element)
//     });
//     console.log(arr);
//     console.log(arr3);
//     arr3 = arr3.sort((a, b) => a - b)
//     if (arr.join('') === arr3.join('')) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(inAscOrder(arr2));