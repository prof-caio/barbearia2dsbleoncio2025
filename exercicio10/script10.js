function contar() {
    let mostraResultado = document.getElementById('resultado');

    mostraResultado.innerHTML = `<p><b>Contando de 1 até 10</b></p>`;

    let contador = 1;

    while(contador <= 10) {
        if(contador % 2 == 0) {
            mostraResultado.innerHTML += `<mark><b>${contador} </b></mark>&#x1F449`;
        } else {
            mostraResultado.innerHTML += `${contador} &#x1F449`;
        }
        contador += 1;
    }

    mostraResultado.innerHTML += `&#x1F3C1`;
}