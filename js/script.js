function nome_funcao() {
    alert ("Função executada com sucesso");
}

function somaNumero(n1, n2) {
    let result = n1 + n2;
    alert(result);
}

function mudaCor() {
    const corzinha = document.getElementById("corzinha").value;
    const fundo = document.body;
    fundo.style.backgroundColor = corzinha;
}

function pegaNome() {
    const nomeDigitado = document.getElementById("insereNome").value;
    const nomeInserido = document.getElementById("exibeNome");
    const titulo = document.getElementById("titulo");

    nomeInserido.value = nomeDigitado;
    titulo.textContent = nomeDigitado;
}

