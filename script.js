// // #1
// let footballPlayers = ['Cristiano Ronaldo', 'Karim Benzema', 'Vinisius Junior', 'Rodrygo Goes', 'Luka Modric', 'Fede Valverde', 'Marco Asensio', 'Thibaut Courtois', 'Toni Kroos', 'Sergio Ramos'];
// for (let i = 0; i < footballPlayers.length; i++) { console.log(`${i + 1}.${footballPlayers[i]}`); }

// // #2
// let arr = ["Iphone", "Samsung", "Redmi", "Xiaomi", "Nokia"];
// function arrPush(item) {
//     arr[(arr.length - 1) + 1] = item;
// }
// // arrPush("Novey");

// // #3
// function arrPop() {
//     arr.splice((arr.length - 1), 1);
// }
// arrPop();

// console.log(arr);

// ! #4
let str = prompt("Enter the string:", "");
let str2 = str.toLowerCase();
let countFor0 = 0,
    countForX = 0;
function checkStr(stringVar) {
    let turnedIntoMas = [...stringVar];
    for (let i = 0; i < turnedIntoMas.length; i++) {
        if (stringVar[i] === 'o') { countFor0++; }
        else if (stringVar[i] === 'x') { countForX++; }
    }
    if ((countFor0 !== countForX) || (countFor0 === 0 && countForX === 0)) {
        console.log("False!");
    } else {
        console.log("True!");
    }
}
checkStr(str2);

// !5
let userStr = prompt("Enter the string:", "");
let outStr = '';
for (let i = 0; i < userStr.length; i++) {
    if (!outStr.includes(userStr[i])) {
        outStr = outStr + userStr[i];
    }
}
console.log(outStr);

