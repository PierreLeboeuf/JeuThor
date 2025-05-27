//// -------------------------------------------------------------------
// Construction du tableau a double dimension (matrice) avec coordonnées
//// -------------------------------------------------------------------
const rows = 18;
const cols = 40;
const grid = [];

for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < cols; x++) {
        row.push([x, y]); // Chaque cellule contient un couple (x, y)
    }
    grid.push(row);
}

console.table(grid); // Affiche la grille dans la console
//// -------------------------------------------------------------------
// Initialisation des variables
//// -------------------------------------------------------------------

let lightX = 3; // Posisition X de l'éclair
let lightY = 8; // Position Y de l'éclair

let initialTX = 3; // Position X de Thor
let initialTY = 6; // Position Y de Thor


let correct = false;

console.log("toto");
while (!correct) {
let direction = prompt("Dans quel direction souhaitez vous faire partir Thor ?");


switch (direction) {
    case "N":
        initialTX = initialTX + 0;
        initialTY = initialTY - 1;
        break;
    case "NE":
        initialTX = initialTX + 1;
        initialTY = initialTY - 1;
        break;
    case "E":
        initialTX = initialTX + 1;
        initialTY = initialTY + 0;
        break;
    case "SE":
        initialTX = initialTX + 1;
        initialTY = initialTY + 1;
        break;
    case "S":
        initialTX = initialTX + 0;
        initialTY = initialTY + 1;
        break;
    case "SW":
        initialTX = initialTX - 1;
        initialTY = initialTY + 1;
        break;
    case "W":
        initialTX = initialTX - 1;
        initialTY = initialTY + 0;
        break;
    case "NW":
        initialTX = initialTX - 1;
        initialTY = initialTY - 1;
        break;
}
console.log("light X :" ,lightX);
console.log("Initial X :" ,initialTX);

console.log("light Y :" ,lightY);
console.log("initial Y :" ,initialTY);
  if (initialTX === lightX && initialTY === lightY) {
    alert("Vous avez gagné !");
    correct = true;
} else if ((initialTX < 0) || (initialTX > 39) || (initialTY < 0) || (initialTY > 17)) {
    alert("Défaite, vous êtes sorti de la carte");
} else {
    alert("essaye encore");
}

}
