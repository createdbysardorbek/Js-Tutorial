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

for (let i = 0; i < 1; i++) {
    let str = prompt("Enter the string:", "");
    if (str === '' || str === null || str.includes(' ')) {
        i--;
    } else {
        function strCheck(str2) {
            let count = 0,
                count2 = 0,
                count3 = 0;
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
            if (count !== count2) {
                console.log("False");
            } else if (count3 > 0) {
                console.log("False");
            } else {
                console.log("True");
            }
        }

        strCheck(str);
    }
}

