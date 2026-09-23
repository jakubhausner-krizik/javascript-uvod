// Vytvořte pole pěti krajských měst ČR, následně položky z pole vypište jednotlivě do konzole.

const krajska_mesta = ["Praha", "Brno", "Ústí nad Labem", "České Budějovice", "Plzeň"];

// Možnost 1
for (const mesto of krajska_mesta) {
    console.log(mesto);
}

// Možnost 2
for (let i = 0; i < krajska_mesta.length; i++) {
    console.log(krajska_mesta[i]);
}