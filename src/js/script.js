// Função para validar a entrada do usuário, garantindo que não esteja vazia ou nula
function validarEntrada(mensagem) {
    let entrada = prompt(mensagem);
    while (entrada === "" || entrada === null) {
        entrada = prompt("Entrada inválida. " + mensagem);
    }
    return entrada;
}

// Função para verificar se a quantidade em estoque está abaixo do limite (5)
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

// Função para classificar o vinho com base na sua idade
function classificarVinho(ano) {
    const anoAtual = new Date().getFullYear(); // Obtém o ano atual
    const idade = anoAtual - ano; // Calcula a idade do vinho

    if (idade <= 3) {
        return "jovem"; // Vinho jovem
    } else if (idade <= 10) {
        return "amadurecido"; // Vinho amadurecido
    } else {
        return "antigo"; // Vinho antigo
    }
}

// Função para exibir os dados do vinho em um alerta e no console
function mostrarDados(nome, safra, quantidade, classificacao) {
    const mensagem = `Vinho: ${nome}\nSafra: ${safra}\nQuantidade: ${quantidade}\nClassificação: ${classificacao}`;
    alert(mensagem); // Mostra a mensagem em um alerta
    console.log(mensagem); // Exibe a mensagem no console
}

// Variáveis para rastrear o número de cadastros, quantidade de estoques baixos e o vinho mais antigo
let contador = 0;
let estoqueBaixoCont = 0;
let menorAno = 9999; // Inicializa com um valor alto para encontrar o menor
let nomeMaisAntigo = "";

// Variáveis para armazenar os detalhes de até 5 vinhos
let nome1, nome2, nome3, nome4, nome5;
let safra1, safra2, safra3, safra4, safra5;
let quant1, quant2, quant3, quant4, quant5;

// Variável para controlar o loop de adição de vinhos
let continuar = "sim";

// Loop para coletar os dados dos vinhos, limitado a 5 entradas
while (continuar.toLowerCase() === "sim" && contador < 5) {
    contador++; // Incrementa o contador para cada entrada de vinho

    // Coleta os detalhes do vinho do usuário
    let nome = validarEntrada("Digite o nome do vinho:");
    let safra = parseInt(validarEntrada("Digite o ano da safra:"));
    let quantidade = parseInt(validarEntrada("Digite a quantidade em estoque:"));

    // Classifica o vinho e exibe seus detalhes
    let classificacao = classificarVinho(safra);
    mostrarDados(nome, safra, quantidade, classificacao);

    // Verifica se o estoque está baixo e atualiza o contador
    if (estoqueBaixo(quantidade)) {
        estoqueBaixoCont++;
    }

    // Atualiza os detalhes do vinho mais antigo, se o atual for mais velho
    if (safra < menorAno) {
        menorAno = safra;
        nomeMaisAntigo = nome;
    }

    // Armazena os detalhes do vinho nas variáveis correspondentes
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

    // Pergunta ao usuário se deseja adicionar outro vinho
    continuar = prompt("Deseja cadastrar outro vinho? (sim/não)");
}

// Exibe um resumo dos dados dos vinhos após o término do loop
alert(
    "Cadastro finalizado!\n" +
    "Total de cadastros: " + contador + "\n" +
    "Vinhos com estoque baixo: " + estoqueBaixoCont + "\n" +
    "Vinho mais antigo: " + nomeMaisAntigo + " (Safra: " + menorAno + ")"
);