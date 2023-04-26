//Praticando funções
function imprimirOlaMundo() {
    alert('Olá mundo');
}

//imprimirOlaMundo();

//crie uma funçao que receba por parametro um nome e imprima no console
// a mensagem 'ola mundo'
//invoque esta funcao passando 3 argumentos

/*function imprimirNome(nome) {
    alert(nome);
}
imprimirNome('carol')
imprimirNome('cadeira')
imprimirNome('Ana')*/

//crie uma função que receba dois numeros e retorne a soma entre eles

//function somaDoisnum(num1, num2) {let soma = num1 + num2 return soma;}
//let resultado = somaDoisnum(5,8)
//console.log(resultado)

//crie uma função que: receba um array de números; 
//Retorne um novo array com dois elementos: 
//o último e o primeiro número do array recebido divididos por dois.

/*function listaArrays() {
    let numero = [4,6,8,10]
    let lista = [numero[0] / 2, numero[2] / 2,];
    return lista
}
let chama = listaArrays();
alert(chama);*/

/*let numArray = [120,340,355,855]
function calcularArray () {
    alert(numArray[3])
}
calcularArray(numArray)*/

//Refaça o exercício anterior com a sintaxe de expressão de função
/*let numeArray = [120,340,355,855]
let variavel = function (calcularArray) {
    return novoArrayDeRetorno = [
        valorRecebido1[3] / 2,
        valorRecebido2[0] / 2
    ]
}
alert('Expressao de fução: ' * variavel(numArray))*/

//Refaça o exercício anterior com a sintaxe de Arrow Function
//let arraysoma = (num1, num2) => { return num1 + num2}

function executa(variavel) {
    return variavel = 354
}

executa(5)

//Exercícios de interpretação de código
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)