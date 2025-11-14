const fatores = {
    metro: 1,
    quilometro: 1000,
    milha: 1609.34,
    polegada: 0.0254
};

function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Digite um valor válido";
        return;
    }

    const emMetros = valor * fatores[origem];
    const convertido = emMetros / fatores[destino];

    document.getElementById("resultado").innerText = `Resultado: ${convertido}`;
}

