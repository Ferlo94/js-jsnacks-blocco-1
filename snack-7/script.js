const list = ["Mario Rossi", "Giulio Verdi", "Enrico Bianchi"];

const nameUser = prompt("Inserisci il tuo Nome e Cognome");

console.log(nameUser);

for (let i = 0; i < list.length ; i++) {

    if (nameUser === list[i]) {
    console.log("Sei in lista");

    } else {
    console.log("Non sei in lista")
    }
}



    
