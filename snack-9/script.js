const animals = ["cane", "gatto"];
const fruits = ["pera", "mela", "susina", "melone"];

if (animals.length < fruits.length) {
    animals.push("melone")
    fruits.pop("melone")
}

console.log(animals, fruits);

