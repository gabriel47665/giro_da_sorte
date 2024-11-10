// Configuração das probabilidades para cada prêmio (soma das probabilidades deve ser 1)
const premios = [
  { nome: "Kit Doce", probabilidade: 0.15 },
  { nome: "Gire novamente", probabilidade: 0.1 },
  { nome: "+2 Pontos", probabilidade: 0.1 },
  { nome: "+3 Pontos", probabilidade: 0.1 },
  { nome: "+1 Ponto", probabilidade: 0.15 },
  { nome: "Kit Doce", probabilidade: 0.15 },
  { nome: "+2 Pontos", probabilidade: 0.1 },
  { nome: "+1 Ponto", probabilidade: 0.15 }
];

// Função para selecionar o prêmio com base nas probabilidades
function selecionarPremio() {
  const randomNum = Math.random(); // Gera um número entre 0 e 1
  let acumulador = 0;

  for (let i = 0; i < premios.length; i++) {
    acumulador += premios[i].probabilidade;
    if (randomNum <= acumulador) {
      return i; // Retorna o índice do prêmio selecionado
    }
  }
  return premios.length - 1; // Retorna o último prêmio, caso algo dê errado
}

// Função para girar a roleta com o tempo específico e parar no prêmio correto
function girarRoleta(tempoGiro, premio) {
  const globalObjects = {
    btJogar: document.getElementById("btJogar"),
    roleta: document.getElementById("roleta"),
    btParar: document.getElementById("btParar")
  };

  globalObjects.btJogar.style.visibility = "hidden";
  globalObjects.btParar.style.visibility = "visible";

  const anguloPorPremio = 360 / premios.length;
  const anguloParada = anguloPorPremio * premio + anguloPorPremio / 2;
  const rotacoesCompletas = 4;
  const anguloFinal = 360 * rotacoesCompletas + anguloParada;

  globalObjects.roleta.style.transition = `transform ${tempoGiro}s linear`;
  globalObjects.roleta.style.transform = `rotate(${anguloFinal}deg)`;

  setTimeout(() => {
    abrirModal(premio);
    globalObjects.btJogar.style.visibility = "visible";
    globalObjects.btParar.style.visibility = "hidden";
  }, tempoGiro * 1000);
}

// Função para iniciar o giro da roleta
function iniciarGiro() {
  const premioSelecionado = selecionarPremio(); // Seleciona o prêmio aleatoriamente
  const tempoGiro = 5; // Tempo de rotação em segundos
  girarRoleta(tempoGiro, premioSelecionado);
  bloquearBotao();
}


// Função para abrir o modal com o prêmio correspondente
function abrirModal(premio) {
  const mensagem = premios[premio].nome === "Gire novamente"
    ? "Não foi dessa vez... Gire novamente!"
    : `Parabéns! Você ganhou: ${premios[premio].nome}`;
    
  document.getElementById("tituloModal").innerText = mensagem;
  $("#ex1").modal("show");
}


// Função para bloquear o botão e exibir contagem regressiva
function bloquearBotao() {
  const botao = document.getElementById("vldBtn");
  let tempoRestante = 20;

  botao.disabled = true;
  botao.innerText = `Aguarde ${tempoRestante}`;

  const intervalo = setInterval(() => {
    tempoRestante--;
    botao.innerText = `Aguarde ${tempoRestante}`;

    if (tempoRestante === 0) {
      clearInterval(intervalo);
      botao.disabled = false;
      botao.innerText = "Clique aqui para girar!";
      resetarPagina();
    }
  }, 1000);
}

// Função para resetar a página
function resetarPagina() {
  const globalObjects = {
    roleta: document.getElementById("roleta")
  };
  globalObjects.roleta.style.transition = "";
  globalObjects.roleta.style.transform = "rotate(0deg)";
}
