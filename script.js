const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

const frases = [
    "🌱 Produzir com responsabilidade é cultivar o futuro.",
    "🌎 Preservar o meio ambiente é investir nas próximas gerações.",
    "🚜 Tecnologia e sustentabilidade fortalecem o agronegócio.",
    "🌾 O campo sustentável gera desenvolvimento e qualidade de vida.",
    "💧 Cada recurso natural preservado é uma colheita garantida para amanhã."
];

botao.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * frases.length);
    mensagem.textContent = frases[indice];
});