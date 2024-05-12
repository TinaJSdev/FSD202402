const columns = parseInt(
  prompt("good luck finding Chonkosaurus u twat", "what's their fav number?")
);

// FALTA METERLE BOTON DE RESET

const imgXUrl = "MEDIA/x.jpg";
const imgChestUrl = "MEDIA/chest.jpg";
const imgSkullUrl = "MEDIA/skull.jpg";
const imgCover = imgXUrl;

const numRandom = Math.floor(Math.random() * columns);
const spanAttempts$$ = document.querySelector("span");
let attempts = 0;
spanAttempts$$.textContent = attempts;

console.log(columns);
console.log(numRandom);

if (columns !== null) {
  for (let i = 0; i < columns; i++) {
    const div$$ = document.createElement("div");
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", imgCover);
    img$$.classList.add("b-div-father");
    div$$.appendChild(img$$);
    img$$.classList.add("b-img");
    document.body.appendChild(div$$);

    const guess = () => {
      attempts += 1;
      spanAttempts$$.textContent = attempts;
      if (i === numRandom) {
        img$$.setAttribute("src", imgChestUrl);
        setTimeout(() => {
          alert("u made it, sicko!!");
        }, 100);
      } else {
        img$$.setAttribute("src", imgSkullUrl);
      }
    };
    div$$.addEventListener("click", guess);
  }
} else {
  alert("try tiping harder but on the keyboard this time, u got it ;);)");
}
