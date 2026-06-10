const curiosidades = [
    "🌱 Uma árvore adulta pode absorver até 22 kg de CO₂ por ano.",
    "🚜 A agricultura de precisão reduz desperdícios e aumenta a produtividade.",
    "💧 Sistemas inteligentes de irrigação economizam milhares de litros de água.",
    "🌾 A rotação de culturas melhora a fertilidade do solo naturalmente.",
    "🌎 Produção sustentável ajuda a preservar a biodiversidade."
];

const botao = document.getElementById("btnSaibaMais");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    const sorteio = Math.floor(Math.random() * curiosidades.length);
    mensagem.innerHTML = curiosidades[sorteio];
});