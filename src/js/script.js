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

while (continuar.toLowerCase() === "sim" && contador < 5) {
    contador++;

    let nome = validarEntrada("Digite o nome do vinho:");
    let safra = parseInt(validarEntrada("Digite o ano da safra:"));
    let quantidade = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    let classificacao = classificarVinho(safra);
    mostrarDados(nome, safra, quantidade, classificacao);

    if (estoqueBaixo(quantidade)) {
        estoqueBaixoCont++;
    }

    if (safra < menorAno) {
        menorAno = safra;
        nomeMaisAntigo = nome;
    }

    if (contador === 1) {
        nome1 = nome; safra1 = safra; quant1 = quantidade;
    } else if (contador === 2) {
        nome2 = nome; safra2 = safra; quant2 = quantidade;
    } else if (contador === 3) {
        nome3 = nome; safra3 = safra; quant3 = quantidade;
    } else if (contador === 4) {
        nome4 = nome; safra4 = safra; quant4 = quantidade;
    } else if (contador === 5) {
        nome5 = nome; safra5 = safra; quant5 = quantidade;
    }

    continuar = prompt("Deseja cadastrar outro vinho? (sim/não)");
}

alert(
    "Cadastro finalizado!\n" +
    "Total de cadastros: " + contador + "\n" +
    "Vinhos com estoque baixo: " + estoqueBaixoCont + "\n" +
    "Vinho mais antigo: " + nomeMaisAntigo + " (Safra: " + menorAno + ")"
);
