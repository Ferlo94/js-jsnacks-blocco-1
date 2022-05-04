const numberList = [];

let number = 0;

for (let i = 0; i < 7; i++) {
    const number = Number(prompt("inserisci un numero"));
    numberList += number;
    
    if (number % 3 === 0) {
        numberList.push(number)
    }
}


