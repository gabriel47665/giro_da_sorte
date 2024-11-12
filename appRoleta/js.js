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
  const randomNum = Math.random();
  let acumulador = 0;

  for (let i = 0; i < premios.length; i++) {
    acumulador += premios[i].probabilidade;
    if (randomNum <= acumulador) {
      return i;
    }
  }
  return premios.length - 1;
}

// Função para girar a roleta com o tempo específico e parar no prêmio correto
function girarRoleta(tempoGiro, premio) {
  const roleta = document.getElementById("roleta");
  const anguloPorPremio = 360 / premios.length;
  const anguloParada = anguloPorPremio * premio + anguloPorPremio / 2;
  const rotacoesCompletas = 4;
  const anguloFinal = 360 * rotacoesCompletas + anguloParada;
  const globalObjects = {
    btJogar: document.getElementById("btJogar"),
    btParar: document.getElementById("btParar")
  };
  
  globalObjects.btJogar.style.visibility = "hidden";
  globalObjects.btParar.style.visibility = "visible";

  roleta.style.transition = `transform ${tempoGiro}s linear`;
  roleta.style.transform = `rotate(${anguloFinal}deg)`;

  setTimeout(() => {
    abrirModal(premio);
    desbloquearBotao();
    globalObjects.btJogar.style.visibility = "visible";
    globalObjects.btParar.style.visibility = "hidden";
  }, tempoGiro * 1000);
}

// Função para iniciar o giro da roleta
function iniciarGiro() {
  const premioSelecionado = selecionarPremio();
  const tempoGiro = 5;
  girarRoleta(tempoGiro, premioSelecionado);
  bloquearBotao()
}

// Função para abrir o modal com o prêmio correspondente
function abrirModal(premio) {
  const mensagem = premios[premio].nome === "Gire novamente"
    ? "Não foi dessa vez... Gire novamente!"
    : `Parabéns! Você ganhou: ${premios[premio].nome}`;

  document.getElementById("tituloModal").innerText = mensagem;
  $("#ex1").modal("show");
}

// Função para bloquear o botão e exibir "Girando" durante a rotação
function bloquearBotao() {
  const botao = document.getElementById("vldBtn");
  botao.disabled = true;
  botao.innerText = "Girando...";
}

// Função para desbloquear o botão e permitir uma nova tentativa
function desbloquearBotao() {
  const botao = document.getElementById("vldBtn");
  botao.disabled = false;
  botao.innerText = "Nova Tentativa";

  // Atualiza o evento de clique para o novo estado do botão
  botao.onclick = function() {
    if (botao.innerText === "Nova Tentativa") {
      resetarPagina();
      setTimeout(iniciarGiro, 10)
    } else {
      bloquearBotao();
      iniciarGiro();
    }
  };
}

// Função para resetar a página e o estado da roleta
function resetarPagina() {
  const roleta = document.getElementById("roleta");
  roleta.style.transition = "";
  roleta.style.transform = "rotate(0deg)";
}

// Configura o evento de clique inicial do botão
document.getElementById("vldBtn").onclick = function() {
  bloquearBotao();  // Bloqueia o botão e mostra "Girando..."
  iniciarGiro();    // Inicia o giro da roleta
};

function simularClique() {
  // Simula o clique no botão vldBtn
  document.getElementById("vldBtn").click();
}
