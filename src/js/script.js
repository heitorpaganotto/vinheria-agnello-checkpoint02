function validarEntrada(mensagem) {
    let entrada = prompt(mensagem);
    while (entrada === "" || entrada === null) {
        entrada = prompt("Entrada inválida. " + mensagem);
    }
    return entrada;
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(ano) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;

    if (idade <= 3) {
        return "jovem";
    } else if (idade <= 10) {
        return "amadurecido";
    } else {
        return "antigo";
    }
}

function mostrarDados(nome, safra, quantidade, classificacao) {
    const mensagem = `Vinho: ${nome}\nSafra: ${safra}\nQuantidade: ${quantidade}\nClassificação: ${classificacao}`;
    alert(mensagem);
    console.log(mensagem);
}

let contador = 0;
let estoqueBaixoCont = 0;
let menorAno = 9999;
let nomeMaisAntigo = "";

let nome1, nome2, nome3, nome4, nome5;
let safra1, safra2, safra3, safra4, safra5;
let quant1, quant2, quant3, quant4, quant5;

let continuar = "sim";
