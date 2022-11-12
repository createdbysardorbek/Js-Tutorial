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

// ! Codewars * Break camelCase

// complete the function
// let str = 'camelCase'
// function solution(string) {
//     let newString = '';
//     for (letter of string) {
//         if (letter == letter.toUpperCase()) {
//             newString += ` ${letter}`;
//         } else {
//             newString += letter;
//         }
//     }
//     return newString;
// }
// console.log(solution(str));

// ! Exam

// let arr = ['1', '2', '3', '4', '5'].map(parseInt);
// console.log(arr);

// ! DOM

// * Adding classes to HTML tags

// let h1 = document.querySelector('.header');
// let newClass = h1.classList;
// newClass.remove('header');
// newClass.add('header1');
// newClass.toggle('header');

// * Selecting HTML elements

// ! Selecting by class returns array if items more than one
// ! You CANNOT use forEach, map, reduce, filter methods for this type of Array

// let paragraph = document.getElementsByClassName('paragraph');
// console.log(paragraph);
// let newArr = [];
// for (let i = 0; i < paragraph.length; i++) {
//     newArr.push(paragraph[i]);
// }
// console.log(newArr);

// ! Changing element in HTML

// let str = document.getElementById('header2').innerHTML = 'Sardorbek Ahadilloyev future Backend Developer';

// ! Selecting id from HTML it return not an array because id is unique

// let id = document.getElementById('header2');
// console.log(id);

// ! Selecting by method querySelector and querySelectorAll
// * We should select like in * CSS

// ! querySelector * this method will return first faced element not all in array

// let paragraphs = document.querySelector('.paragraph');
// console.log(paragraphs); // ! not array

// * querySelectorAll * you can use simple array methods

// let paragraphs = document.querySelectorAll('.paragraph');
// console.log(paragraphs); // ! this returns an array

// * Exampel of * changing texts in HTML page

// let text = document.getElementById('header2').innerText = 'Hello World',
//     text2 = document.getElementsByClassName('header');
// text2[0].innerText = 'Changed with JavaScript!';

// * Exampel of * changing texts in HTML page

// let userInfo = prompt('Enter your name:', '');
// let text = document.getElementById('header2').innerText = `${userInfo} hi from JavaScript`;

// ! That's crazy! 😱

// let rimNum = 'X';
// function checkRomeNums(reimNum) {
//     let rimObj = {
//         'I': 1,
//         'v': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000,
//     }
//     let str = reimNum.split()
// }
// console.log(checkRomeNums(rimNum));

// ! Exercise

// let weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let promptUser = prompt('Enter week day:');
// console.log(weeks[promptUser]);

// ! Homework * Making div

// let newDiv = document.createElement('div');
// let width = document.querySelector('.width');
// let height = document.querySelector('.height');
// let borderRadius = document.querySelector('.borderRadius');
// let background = document.querySelector('.background');
// let btn = document.querySelector('button');
// btn.style.cssText = `
//     width: 150px;
//     padding: 15px 20px;
//     box-sizing: border-box;
//     background: aqua;
//     font-size: 24px;
//     color: red;
//     cursor: pointer;
//     border-radius: 20px;
//     outline: 0;
//     border: 0;
// `;

// btn.addEventListener('mouseover', (e) => {
//     e.target.style.cssText = `
//         width: 150px;
//         padding: 15px 20px;
//         box-sizing: border-box;
//         background: red;
//         font-size: 24px;
//         color: aqua;
//         cursor: pointer;
//         border-radius: 20px;
//         outline: 0;
//         border: 0;
//     `;
// });

// btn.addEventListener('mouseout', (e) => {
//     e.target.style.cssText = `
//         width: 150px;
//         padding: 15px 20px;
//         box-sizing: border-box;
//         background: aqua;
//         font-size: 24px;
//         color: red;
//         cursor: pointer;
//         border-radius: 20px;
//         outline: 0;
//         border: 0;
//         margin-bottom: 10px;
//     `;
// });

// let inputs = document.querySelectorAll('input');
// inputs.forEach(elem => {
//     elem.style.cssText = `
//     display: block;
//     width: 150px;
//     padding: 15px 20px;
//     font-size: 18px;
//     border: 0;
//     outline: 0;
//     background: aqua;
//     border-radius: 20px;
//     margin-bottom: 10px;
// `;
// });

// let labels = document.querySelectorAll('label');
// labels.forEach(elem => {
//     elem.style.cssText = `
//         display:block;
//         font-size: 18px;
//         font-weight: 700;
//         margin-bottom: 10px;
//     `;
// })



// btn.addEventListener('click', () => {
//     if ((parseInt(width.value) >= 0 && parseInt(height.value) >= 0 && parseInt(borderRadius.value) >= 0) && (width.value !== '' && height.value !== '' && borderRadius.value !== '' && background.value !== '') && (width.value.endsWith('px') || width.value.endsWith('rem') || width.value.endsWith('%')) && (height.value.endsWith('px') || height.value.endsWith('rem') || height.value.endsWith('%')) && (borderRadius.value.endsWith('px') || borderRadius.value.endsWith('rem') || borderRadius.value.endsWith('%'))) {
//         newDiv.style.cssText = `
//         width: ${width.value};
//         height: ${height.value};
//         border-radius: ${borderRadius.value};
//         background-color: ${background.value};
//     `;
//         btn.after(newDiv);
//     } else {
//         alert('Fail! Please, enter correct values!');
//     }
// });

// ! Modal

let btn = document.querySelector('button');
let modal = document.querySelector('.modal');
let btn2 = document.querySelector('.modal .modal__content form button');
let close = document.querySelector('.close');

btn.addEventListener('click', () => {
    modal.classList.remove('hide');
    modal.classList.add('show');
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
})

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('show');
        modal.classList.add('hide');
    }
})
