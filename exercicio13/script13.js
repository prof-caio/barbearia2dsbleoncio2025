let mostraHTML = document.getElementById("resultado");
let contador = -1;
let numero = 0;
let numeroAtual = -1;

function calculo() {
    while(numeroAtual != 0) {
        numeroAtual = Number(prompt("Digite um número. Digite 0 para parar."));
        numero += numeroAtual; 
        contador++
        console.log(numero)
        console.log(contador)
    }

    mostraHTML.innerHTML = `Média: ${parseInt(numero/contador)}. Soma: ${parseInt(numero)}`;

}