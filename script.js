const numeroTexto = document.getElementById("numero");
const btnMais = document.getElementById("mais");
const btnMenos = document.getElementById("menos");
const mensagem = document.getElementById("mensagem");

let numero = 0;

function aumentar(){

    if (numero < 200){
        numero++;
        mensagem.textContent = '';
    } else {
        mensagem.textContent = 'Limite atingido';
    } 
    numeroTexto.textContent = numero;
}

function diminuir(){

    if (numero > 0){
        numero--;
        mensagem.textContent = '';
    } else {
        mensagem.textContent = 'Numero nao pode ser negativo';
    }

    numeroTexto.textContent = numero;
}

btnMais.addEventListener('click', aumentar);
btnMenos.addEventListener('click', diminuir);