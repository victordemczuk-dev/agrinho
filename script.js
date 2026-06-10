const mensagens = [
    "🌱 Produzir com responsabilidade é cultivar o futuro.",
    "💧 Cada recurso natural preservado é uma colheita garantida.",
    "🚜 Tecnologia e sustentabilidade fortalecem o agronegócio.",
    "🌾 A rotação de culturas melhora a fertilidade do solo.",
    "🌎 Produção sustentável ajuda a preservar a biodiversidade."
];

const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * mensagens.length);
    mensagem.innerHTML = mensagens[indice];
});