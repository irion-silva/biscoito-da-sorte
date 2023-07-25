// Manipulação de dados com DOM
const btnReset = document.querySelector("#btnReset")
const fortuneCookie = document.querySelector(".fortune-cookie")
const body = document.body;
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const message = document.querySelector(".message")
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
]

// Adiciona um ouvinte de eventos ao botão
showRandomMessage()
fortuneCookie.addEventListener("click", function () {
  // Verifica se a classe .hide está ativa junto ao .screen2 Se estiver, volta ao background padrão
   if (document.querySelector(".screen2.hide")) { 
    toggleScreen()
    body.style.transition = "background-color 0.3s ease";
    body.style.background = "linear-gradient(45deg, #191919 0%, #B0F 100%)";
  }
});

  btnReset.addEventListener("click", function () {
    // Verifica se a classe .hide está ativa junto ao .screen1
    if (document.querySelector(".screen1.hide")) {
      body.style.transition = "background-color 0.3s ease";
      body.style.background = "linear-gradient(45deg, #190361 0%, #B0F 100%)";
      showRandomMessage()
      toggleScreen()
    }
  });

// Função para alternar as telas
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

// Função para selecionar uma frase aleatória do array
function generateRandomMessage() {
  return Math.floor(Math.random() * phrases.length)
}

// Função que utiliza uma callback para selecionar e exibir uma mensagem aleatória
function showRandomMessage() {
  const randomIndex = generateRandomMessage(phrases)
  const randomMessage = phrases[randomIndex]
  message.innerText = randomMessage
}