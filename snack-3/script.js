// const  numberOne = Number(prompt("inserisci un numero"));
// const  numberTwo = Number(prompt("inserisci un numero"));
// const  numberThree = Number(prompt("inserisci un numero"));
// const  numberFour = Number(prompt("inserisci un numero"));
// const  numberFive = Number(prompt("inserisci un numero"));
// const  numberSix = Number(prompt("inserisci un numero"));
// const  numberSeven = Number(prompt("inserisci un numero"));
// const  numberEight = Number(prompt("inserisci un numero"));
// const  numberNine = Number(prompt("inserisci un numero"));
// const  numberTen = Number(prompt("inserisci un numero"));

// console.log(numberOne + numberTwo + numberThree + numberFour + numberFive + numberSix + numberSeven + numberEight + numberNine + numberTen)

let total = 0;

for (let i = 0; i < 10; i++) {
    const number = Number(prompt("inserisci un numero"));
    total += number;

}

console.log(total);
