/* Faça um programa para calcular o valor de uma viagem.;
Você terá 3 variaveis. Sendo elas;
1 - Preço do Combustivel;
2 - Gasto médio de combustivel do carro;
3 - Distancia em KM da viagem:

Imprima no Console o valor que será gasto de combustivel para realizar esta viagem*/

/* Corolla tá andando bem kkkk*/ 

const precoCombustivel = 5.79; /* facada do posto*/
const kmLitros = 9.5; /* consumo da ferramenta Toyota*/
const distanciaEmKm = 125; /* distancia para Teresina*/


const litrosConsumidos = distanciaEmKm / kmLitros;

const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
