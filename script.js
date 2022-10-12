let userCardNum = prompt('Karta raqamini kiriting:');
// let userCardNumber = +userCardNum;
let userEnteredNumLength = userCardNum.length;

if (userEnteredNumLength == 16 && +userCardNum) {
    alert('Karta raqamingiz qabul qilindi!');
} else {
    alert('Karta raqami kiritishda xatolik bor!');
}

function sayHi() {
    alert('Hi from Git!');
}