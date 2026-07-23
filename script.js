const numeroTexto = document.getElementById("numero");
const btnMais = document.getElementById("mais");
const btnMenos = document.getElementById("menos");
const btnReset = document.getElementById("reset");
const btnAplicar = document.getElementById("aplicar");
const inputValor = document.getElementById("valor-personalizado");
const mensagem = document.getElementById("mensagem");
const progressFill = document.getElementById("progress-fill");

let numero = 0;
const limiteMin = -50;
const limiteMax = 200;

function atualizarInterface() {
  numeroTexto.textContent = numero;
  numeroTexto.classList.remove("pulse");
  void numeroTexto.offsetWidth;
  numeroTexto.classList.add("pulse");

  const percentual = ((numero - limiteMin) / (limiteMax - limiteMin)) * 100;
  const progresso = Math.min(100, Math.max(0, percentual));
  progressFill.style.width = `${progresso}%`;
}

function mostrarMensagem(texto, tipo = "info") {
  mensagem.textContent = texto;
  mensagem.className = `message ${tipo}`;
}

function aumentar() {
  if (numero < limiteMax) {
    numero++;
    mostrarMensagem("Valor aumentado com sucesso!", "success");
  } else {
    mostrarMensagem("Limite máximo atingido.", "error");
  }
  atualizarInterface();
}

function diminuir() {
  if (numero > limiteMin) {
    numero--;
    mostrarMensagem("Valor reduzido com sucesso!", "success");
  } else {
    mostrarMensagem("O valor não pode ficar abaixo do limite.", "error");
  }
  atualizarInterface();
}

function resetar() {
  numero = 0;
  inputValor.value = numero;
  mostrarMensagem("Contador resetado para zero.", "info");
  atualizarInterface();
}

function aplicarValor() {
  const valorDigitado = Number(inputValor.value);

  if (Number.isNaN(valorDigitado)) {
    mostrarMensagem("Digite um número válido.", "error");
    return;
  }

  if (valorDigitado < limiteMin || valorDigitado > limiteMax) {
    mostrarMensagem(`O valor precisa estar entre ${limiteMin} e ${limiteMax}.`, "error");
    return;
  }

  numero = valorDigitado;
  mostrarMensagem("Valor aplicado com sucesso!", "success");
  atualizarInterface();
}

function tratarTeclado(evento) {
  if (evento.key === "ArrowUp") {
    evento.preventDefault();
    aumentar();
  } else if (evento.key === "ArrowDown") {
    evento.preventDefault();
    diminuir();
  } else if (evento.key === "Escape") {
    resetar();
  }
}

btnMais.addEventListener("click", aumentar);
btnMenos.addEventListener("click", diminuir);
btnReset.addEventListener("click", resetar);
btnAplicar.addEventListener("click", aplicarValor);
inputValor.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    aplicarValor();
  }
});
document.addEventListener("keydown", tratarTeclado);

atualizarInterface();
mostrarMensagem("Comece ajustando o valor.", "info");