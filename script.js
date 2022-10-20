// Homework - 1
let footballPlayers = ['Cristiano Ronaldo', 'Karim Benzema', 'Vinisius Junior', 'Rodrygo Goes', 'Luka Modric', 'Fede Valverde', 'Marco Asensio', 'Thibaut Courtois', 'Toni Kroos', 'Sergio Ramos'];
for (let i = 0; i < footballPlayers.length; i++) { console.log(`${i + 1}.${footballPlayers[i]}`); }

// Homework - 2
let arr = ["Iphone", "Samsung", "Redmi", "Xiaomi", "Nokia"];
function arrPush(item) {
    arr[(arr.length - 1) + 1] = item;
}
arrPush("Novey");

// Homework - 3
function arrPop() {
    arr.splice(arr.length - 1);
}
arrPop();

console.log(arr);