let coxinha = prompt("Olá, voce deseja comer uma coxinha por 2,50? S ou N").toUpperCase()
let contadorCoxinha = 0
while (coxinha !== "N"){
    coxinha = prompt("Voce deseja comer outra? S ou N").toUpperCase()
    contadorCoxinha ++

}
let valorTotalAPagar = contadorCoxinha * 2.50

console.log(`Voce comeu ${contadorCoxinha} coxinhas! e deu ${valorTotalAPagar} reais!`)