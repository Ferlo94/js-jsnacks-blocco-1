const numberList = [];

for (let i = 0; i < 6; i++) {
    const number = Number(prompt("inserisci un numero"));
    
    if (number % 2 === 1) {
        numberList.push(number)
    }
}

console.log(numberList)


