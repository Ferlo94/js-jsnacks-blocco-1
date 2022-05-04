const firstWord = prompt("Inserisci una parola")
const secondWord = prompt("Inserisci una parola")

if(firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord)

} else if (secondWord.length < firstWord.length) {
    console.log(secondWord, firstWord)

} else {
    console.log("LE PAROLE SONO DI EGUAL LUNGHEZZA")
}

