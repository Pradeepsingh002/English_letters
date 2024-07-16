let h3 = document.querySelector("h3");
let IMG = document.querySelector("img");
let btn = document.querySelector("button");

let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let n = 0;
function display() {
  if (n <= 25) {
    h3.style.fontSize = "100px";
    h3.innerText = letters[n];
    IMG.setAttribute("src", `./images/${n}.jpg`);
    n++;
  } else {
    IMG.setAttribute("src", "");
    h3.innerText = "Finished";
    h3.style.fontSize = "42px";
    n = 0;
  }
}

btn.addEventListener("click", display);
