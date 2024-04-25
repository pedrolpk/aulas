



const precoCombustivel = 5.79;
const kmLitros = 9.5;
const distanciaEmKm = 125;


const litrosConsumidos = distanciaEmKm / kmLitros;

const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));