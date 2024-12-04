// Função para copiar o texto
function copiarChavePix() {
    // Obtém o conteúdo do parágrafo
    const chavePix = document.getElementById('chavePix').innerText;

    // Usa a API Clipboard para copiar o texto
    navigator.clipboard.writeText(chavePix)
        .then(() => {
            alert('Chave Pix copiada com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar a chave Pix:', err);
            alert('Falha ao copiar a chave Pix.');
        });
}

// Adiciona o evento de clique ao botão
document.querySelector('.copiar').addEventListener('click', copiarChavePix);

// POP-UPS DOS PARQUES
document.querySelector("#button-ecoparque").addEventListener("click", () => {
    document.querySelector("#ecoparque").style = "display: block"
}
),
document.querySelector("#close-ecoparque").addEventListener("click", () => {
    document.querySelector("#ecoparque").style = "display: none"
}
),
document.querySelector("#button-bosqueclaro").addEventListener("click", () => {
    document.querySelector("#bosqueclaro").style = "display: block"
}
),
document.querySelector("#close-bosqueclaro").addEventListener("click", () => {
    document.querySelector("#bosqueclaro").style = "display: none"
}
),
document.querySelector("#button-verdesol").addEventListener("click", () => {
    document.querySelector("#verdesol").style = "display: block"
}
),
document.querySelector("#close-verdesol").addEventListener("click", () => {
    document.querySelector("#verdesol").style = "display: none"
}
),
document.querySelector("#button-jardimbrisa").addEventListener("click", () => {
    document.querySelector("#jardimbrisa").style = "display: block"
}
),
document.querySelector("#close-jardimbrisa").addEventListener("click", () => {
    document.querySelector("#jardimbrisa").style = "display: none"
}
),
document.querySelector("#button-parqueluar").addEventListener("click", () => {
    document.querySelector("#parqueluar").style = "display: block"
}
),
document.querySelector("#close-parqueluar").addEventListener("click", () => {
    document.querySelector("#parqueluar").style = "display: none"
}
),
document.querySelector("#button-parqueaurora").addEventListener("click", () => {
    document.querySelector("#parqueaurora").style = "display: block"
}
),
document.querySelector("#close-parqueaurora").addEventListener("click", () => {
    document.querySelector("#parqueaurora").style = "display: none"
}
);