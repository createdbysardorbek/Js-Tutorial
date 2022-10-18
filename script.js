const uzcardnumber = (num) => {
    if (num.length > 16 || isNaN(+num) || !num.startsWith(8600) || num.includes(' ')) {
        console.log("Invalid card number!");
    } else {
        let num2 = num.slice(4, 12);
        console.log(num.replace(`${num2}`, ' ******** '));
    }
}
uzcardnumber('8600323454567674');

