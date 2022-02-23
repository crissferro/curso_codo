const frutas = ["banana", "banana", "pera", "banana"];
const dinero = 1000;

// Exportamos en un objeto
module.exports = {
  frutas: frutas,
  dinero,
};

const frutas = require("./frutas");

frutas.forEach((fruta) => {
  console.count(fruta);
});