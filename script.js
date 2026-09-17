const title = "Ukázka JavaScriptu";

const el = document.getElementById("title");

// Toje tajná zpráva
const API_KEY = "SECRET_asd";

const colors = [
    "red",
    "green",
    "blue",
    "brown",
    "magenta",
    "cyan",
    "darkgoldenrod",
];

for (let x = 0; x < title.length; x++) {
    const subChar = document.createElement("div");
    subChar.innerText = title[x];
    subChar.addEventListener("mousemove", (e) => {
        subChar.style.color = colors[x % colors.length];
        subChar.classList.add("ani");
        subChar.offsetWidth;
        setTimeout(event => {
            subChar.style.color = "black";
            subChar.classList.remove("ani");
        }, 600)
    });

    el.append(subChar);
}
