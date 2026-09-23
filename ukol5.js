// Vytvořte pole s cenami pěti produktů (čísla), následně pomocí cyklu sečtěte všechny hodnoty v poli a výsledný součet vypište do konzole.

const cenyProduktu = [12, 25.50, 30, 19.90, 50];
let celkovaCena = 0;

for (let cena of cenyProduktu) {
    celkovaCena += cena;
}

console.log(celkovaCena);