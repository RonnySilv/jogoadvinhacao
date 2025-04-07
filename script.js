let min = 1;
let max = 100;
let tentativa = 0;
let palpite;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function startGame() {
  min = 1;
  max = 1000;
  tentativa = 1;
  palpite = getRandomInt(min, max);


  document.getElementById("guess-text").textContent = `Tentativa ${tentativa}: O número é ${palpite}?`;
  document.getElementById("response-buttons").style.display = "flex";
  document.getElementById("start-btn").style.display = "none";
  document.querySelector(".restart-btn").style.display = "none";
}

function userResponse(resposta) {
  if (resposta === "maior") {
    min = palpite + 1;
  } else if (resposta === "menor") {
    max = palpite - 1;
  } else if (resposta === "acertou") {
    document.getElementById("guess-text").textContent = `🎉 Acertei! O número é ${palpite}. Levei ${tentativa} tentativa(s)!`;
    document.getElementById("response-buttons").style.display = "none";
    document.querySelector(".restart-btn").style.display = "inline-block";
    return;
  }

  if (min > max) {
    document.getElementById("guess-text").textContent = "❌ Opa! Algo deu errado. Tem certeza que respondeu corretamente?";
    document.getElementById("response-buttons").style.display = "none";
    document.querySelector(".restart-btn").style.display = "inline-block";
    return;
  }

  tentativa++;
  palpite = Math.floor((min + max) / 2);
  document.getElementById("guess-text").textContent = `Tentativa ${tentativa}: O número é ${palpite}?`;
}

function restartGame() {
  document.getElementById("guess-text").textContent = "Pense em um número de 1 a 100 e clique em \"Começar\".";
  document.getElementById("start-btn").style.display = "inline-block";
  document.getElementById("response-buttons").style.display = "none";
  document.querySelector(".restart-btn").style.display = "none";
}
