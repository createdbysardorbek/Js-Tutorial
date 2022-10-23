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

// #4

let str = prompt("Enter the string:", "");
let count = 0;
let count2 = 0;
let count3 = 0;
function strCheck(str2) {
    str2.toLowerCase;
    let newStr = [...str2];
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "x") {
            count++;
        } else if (newStr[i] == "o" || newStr[i] === '0') {
            count2++;
        } else {
            count3++;
        }
    }
    if (count === count2) {
        console.log("True");
    } else if (count3 > 0) {
        console.log("Flase");
    } else {
        console.log("False");
    }
}
strCheck(str);
