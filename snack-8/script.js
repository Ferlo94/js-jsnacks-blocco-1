
// Crea un array di numeri interi e fai la somma di tutti gli 
// elementi  che sono in posizione dispari

const list = [0, 1, 2, 3, 4, 5]

let oddTotal = 0;

for (let i = 0; i < list.length; i++) {

    if (list[i] % 2 === 1) {
        oddTotal += list[i];
    }
}

console.log(oddTotal);
