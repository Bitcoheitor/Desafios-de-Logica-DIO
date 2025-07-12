// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

// Verifica se a operação é para adicionar ao estoque (1)
if (operacao === 1) {
    estoque += quantidade;
    print(estoque);
}
// Se a operação for para retirar do estoque (2)
else if (operacao === 2) {
    // Se a quantidade a ser retirada for maior que o estoque disponível, exibe mensagem de erro
    if (quantidade > estoque) {
        print("Estoque insuficiente");
    } else {
        // Caso contrário, retira a quantidade do estoque e exibe o valor atualizado
        estoque -= quantidade;
        print(estoque);
    }
}