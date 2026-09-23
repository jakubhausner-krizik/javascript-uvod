// Vytvořte dvě proměnné, String s hodnotou "6" a číslo s hodnotou 6. Pomocí Operátorů == a === tyto proměnné porovnejte a výsledek vypište do konzole. Následně zjistěte, zda je výsledek stejný nebo odlišný a z jakého důvodu.

let cislo = 6;
let text = "6";

console.log("Porovnání pomocí ==");
console.log(cislo == text);

console.log("Porovnání pomocí ===");
console.log(cislo === text);

// Výsledky jsou odlišné, protože
// == porovnává hodnotu s převodem typu,
// === porovnává hodnotu i datový typ.