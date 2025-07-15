# 3️⃣ Escrevendo as classes de um Jogo

## O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

#### "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia,
  guerreiro atacou usando espada


~~~

// Classe que representa um herói de aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }
        return ataque;
    }
}

// Exemplo que exibe o resultado de todos os heróis:
const herois = [
    new Heroi('Luna', 22, 'ninja'),
    new Heroi('Arus', 30, 'mago'),
    new Heroi('Baldur', 35, 'guerreiro'),
    new Heroi('Shifu', 50, 'monge')
];

herois.forEach(heroi => {
    const ataque = heroi.atacar();
    console.log(`Nome: ${heroi.nome}`);
    console.log(`Tipo: ${heroi.tipo}`);
    console.log(`Idade: ${heroi.idade}`);
    console.log(`Ataque: ${ataque}`);
    console.log(`o ${heroi.tipo} atacou usando ${ataque}`);
    console.log('');
});
~~~
