// CALCULADORA DE ECONOMIA DE ÁGUA

const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function(){

    let litros =
    Number(document.getElementById("litros").value);

    if(litros <= 0){

        document.getElementById("resultado").innerHTML =
        "⚠️ Digite um valor válido.";

        return;
    }

    let economiaAnual = litros * 365;

    document.getElementById("resultado").innerHTML =
    `💧 Economia anual estimada: ${economiaAnual.toLocaleString('pt-BR')} litros de água.`;
});


// CONTADOR ANIMADO

let contador = 0;
let meta = 5000;

function atualizarContador(){

    if(contador < meta){

        contador += 50;

        document.getElementById("arvores").textContent =
        contador.toLocaleString("pt-BR");

        requestAnimationFrame(atualizarContador);
    }
}

atualizarContador();