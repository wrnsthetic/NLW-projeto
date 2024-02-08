const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "vari myVar = 10;",
            "let myVar = 10;",
            "const myVar = 10;"
        ],
        correta: 1 // A resposta correta é a opção 2, 'let myVar = 10;'
    },
    {
        pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "String"
        ],
        correta: 2 // A resposta correta é a opção 3, 'String'
    },
    {
        pergunta: "O que o método 'console.log()' faz em JavaScript?",
        respostas: [
            "Imprime algo no console do navegador",
            "Cria um alerta na página",
            "Adiciona um elemento ao HTML"
        ],
        correta: 0 // A resposta correta é a opção 1, 'Imprime algo no console do navegador'
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita (igualdade de valor e tipo)",
            "Comparação solta (igualdade de valor)",
            "Atribuição de valor"
        ],
        correta: 0 // A resposta correta é a opção 1, 'Comparação estrita (igualdade de valor e tipo)'
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "const myFunction = () => {}",
            "myFunction = function() {}"
        ],
        correta: 0 // A resposta correta é a opção 1, 'function myFunction() {}'
    },
    {
        pergunta: "Qual é o símbolo para comentários de linha em JavaScript?",
        respostas: [
            "//",
            "/* */",
            "#"
        ],
        correta: 0 // A resposta correta é a opção 1, '//'
    },
    {
        pergunta: "O que é um operador ternário em JavaScript?",
        respostas: [
            "Um operador que trabalha com três operandos",
            "Um operador que trabalha com dois operandos",
            "Um operador que trabalha com um operando"
        ],
        correta: 0 // A resposta correta é a opção 1, 'Um operador que trabalha com três operandos'
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0 // A resposta correta é a opção 1, 'pop()'
    },
    {
        pergunta: "O que o método 'forEach()' faz em um array em JavaScript?",
        respostas: [
            "Itera sobre cada elemento do array",
            "Remove todos os elementos do array",
            "Adiciona um elemento ao array"
        ],
        correta: 0 // A resposta correta é a opção 1, 'Itera sobre cada elemento do array'
    },
    {
        pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
        respostas: [
            "'55'",
            "10",
            "Erro"
        ],
        correta: 0 // A resposta correta é a opção 1, "'55'"
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


// laço de repetição; loop;
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)

    }
    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}