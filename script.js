function calcularEconomia(){

    let litros = Number(
        document.getElementById("litros").value
    );

    let anual = litros * 365;

    document.getElementById("resultado").innerHTML =
        `🌱 Economia anual estimada: ${anual.toLocaleString()} litros de água.`;
}