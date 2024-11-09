// Lista de códigos alfanuméricos e seus prêmios correspondentes
const codigosPremios = {
  0: { codigos: 
  ["A415D5", "B2F3G7", "H9J1K3", "L4N5O6", "P8Q2R4",
  "S7T3U9", "W0X5Z2", "D6G8H1", "C3E9J0", "K2L4M7",
  "O5P3S8", "V1X0Y9", "U6Z7A4", "I2J3L5", "E1G6H9",
  "M4N8Q0", "R2S3V7", "T5U4X6", "F0Y9A1", "Z8B5D3",
  "C6D7F2", "G1H3J4", "K7M0P9", "L5O2Q3", "W4X1Z8",
  "S3V0B6", "D9E5F7", "I8J6K2", "N7P4Q5", "A2C9E1",
  "T0U1V9", "Y3Z5B4", "F7G8H0", "I1J9L6", "X2W4A7",
  "P6Q8R3", "O0S5T9", "K4M7N2", "Z3B1Y6", "D2E8F5" ], tempo: 5 },  // Bombom

  1: { codigos: 
  ["B123F7", "N5O6P3", "T7U8W9", "X3Y1Z5", "C4D6F0",
  "H9J2K4", "M5L0N3", "Q7R8S2", "V6X0A3", "G5H1J7",
  "K3M4L9", "I6J8D1", "O4P9F5", "R2S0T8", "B7C5A1",
  "E3G0H6", "D2F4J8", "L1M9O3", "X5Y7W2", "Z0A6B3",
  "V8T9R5", "S3U1W6", "N4P0D7", "F9H2I8", "Y1Z3A5",
  "J7L6K2", "C8E1D5", "G0I4F9", "Q3S6T8", "W2X7Z0",
  "A4B6C9", "O1P5L7", "M3R8N0", "F2H7G1", "D5E9J4",
  "K6L3M8", "B2A0C1", "I4F5H7", "Y9Z6X3", "J1G3K0"], tempo: 5 },  // Chocolate

  2: { codigos: 
  ["C234G8", "A7D5F0", "H2J8K3", "L4O6N5", "Q3R2T9",
  "V5X0W3", "S1U9Z7", "I4J3M0", "O2P1N8", "C5E7B9",
  "F3G1K9", "X2Z6A5", "R8U9Y1", "B7D3L6", "N1P0T8",
  "V6A2F9", "J5K7M3", "D4E9H2", "L1N6Q5", "W8Z3X0",
  "Y4F7G2", "P3Q5R1", "K0O8J6", "M2T9S7", "I6H0D5",
  "C3B1A4", "E7G8J9", "F6H5K4", "L8O1V0", "Z9X4Y3",
  "S2A3D6", "Q1T4U5", "B0C9G7", "D5L2F1", "X6Y0J3",
  "W9N3O7", "K8A2V5", "Z1C4B6", "J2H7P3", "M5R6S0" ], tempo: 5 },  // Pirulito

  3: { codigos: ["D567H9", "RST012"], tempo: 5 },  // Pix R$20,00

  4: { codigos: 
  ["E678I0", "N5Q2S4", "W8Y0Z3", "A4C7D9", "P1R9B5",
  "U3F5G6", "L8O1Q2", "S7T3U8", "X9B0K4", "M5N2J7",
  "C4D1H0", "I3K8A6", "V7W6P9", "Z2Y3L5", "Q9F0B1",
  "G6J4H7", "O2P3R8", "T1W5C0", "A9S6K4", "L7M0Z8",
  "B1D2F9", "H8J5G3", "N4Q6P2", "X0C5V9", "E7Z1D6",
  "M3T4A8", "L0W1K5", "U2Y7Q9", "I6F3J1", "C8G9L2",
  "R4H2O5", "P0A3X6", "D5N9Y7", "S1B8V4", "T3Q0W9",
  "X9K2J6", "L5F4G1", "O7A8Y3", "N1Z0B6", "V6W3D7" ], tempo: 5 },  // Chocolate

  5: { codigos: 
  ["F890J1", "Q7B3D8", "L2X4H5", "A1N6O3", "U9R0P5",
  "T2F4Z1", "G3W8X7", "Y5B1L9", "V7S0M3", "D8N2C6",
  "H4E5P3", "F9K6I7", "Z2O3G1", "J0C7W5", "L8R6A4",
  "T9Q2S7", "D3X0J1", "F5U8P9", "N1G6Y3", "B7O4K2",
  "R6W1F9", "P0V8Y5", "H3T2J4", "M9L5K1", "S7Z4Q6",
  "E8A0N2", "U1B9X5", "K3C7I8", "J5F2G4", "Y6V3W9",
  "L1N8O4", "D4H0T3", "B9A2Z7", "M3Q5P8", "O6G1X9",
  "K8W4S2", "V7E9F1", "C2Y0L3", "Q1U6H9", "P5R3N0" ], tempo: 5 },  // Bombom

  6: { codigos: 
  ["G456K2", "N7T4F1", "V0S9Z8", "Y3B6D5", "C1J0X4",
  "L9H2O5", "M3K1W8", "Q5N8A0", "U4I7F6", "J2P9E3",
  "G8T5Y1", "O6Z3C9", "B7D2X5", "V4L1Q3", "F9H0P7",
  "S5A8L6", "W2J4M3", "Z1U9B7", "T0K6Q5", "P3R8N2",
  "F6V9X7", "I8A1B5", "L3M5D0", "Y4G7H2", "O9W6N4",
  "K2C3X8", "B0E5T1", "D7I6Q9", "L5Y8Z3", "P1H9K4",
  "G3R2M6", "A6O5N9", "S7Q4F0", "X9W1B8", "V8L3D2",
  "N0P7Y5", "K4F6G1", "U1T3A9", "M2H0J5", "R9Q8E6"], tempo: 5 },  // Pirulito

  7: { codigos: ["H789L3"], tempo: 5 },  // Relógio
  "random": { codigos: ["TESTE1"], tempo: 5 }      // Código especial para um prêmio aleatório
};

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
      botao.innerText = "Girar!";
      resetarPagina()
    }
  }, 1000);
}

// Função para validar o código e girar a roleta para o prêmio específico
function validarCodigo() {
  const codigo = document.getElementById("codigoInput").value.toUpperCase();
  let premioEncontrado = null;
  let tempoGiro = 5;

  for (let premio in codigosPremios) {
    if (codigosPremios[premio].codigos.includes(codigo)) {
      premioEncontrado = premio;
      tempoGiro = codigosPremios[premio].tempo;
      break;
    }
  }

  if (premioEncontrado !== null) {
    if (premioEncontrado === "random") {
      const premioAleatorio = Math.floor(Math.random() * 8);
      girarRoleta(tempoGiro, premioAleatorio);
    } else {
      girarRoleta(tempoGiro, Number(premioEncontrado));
    }
    bloquearBotao();
  } else {
    alert("Código inválido. Tente novamente.");
  }
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

  const anguloPorPremio = 360 / 8;
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

// Função para abrir o modal com o prêmio correspondente
function abrirModal(premio) {
  const premios = ["Bombom", "Chocolate", "Pirulito", "Pix R$20,00", "Chocolate", "Bombom", "Pirulito", "Relógio"];
  document.getElementById("tituloModal").innerText = `Parabéns! Você ganhou: ${premios[premio]}`;
  $("#ex1").modal("show");

//  setTimeout(resetarPagina, 4000);
}

// Função para resetar a página
function resetarPagina() {
  document.getElementById("codigoInput").value = "";
  const globalObjects = {
    roleta: document.getElementById("roleta")
  };
  globalObjects.roleta.style.transition = "";
  globalObjects.roleta.style.transform = "rotate(0deg)";
}
