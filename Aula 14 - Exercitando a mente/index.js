//procedimento
function olaNome(nome) {
    console.log("Olá " + nome);
}

//funções sem argumentos
function acenderLampada() {
    return 'Lâmpada acesa';
}

//indentação
function ehPar(numero) {
    if(numero % 2) { //vira 1 (true) ou 0(false)
        return false
    } else {
        return true
    }
}

//funções nativas
alert("Resilia");
var curso = "Webdev";
alert(curso);

//strings

//template strings

var nome = prompt('Qual é o seu nome?');
var saudacao = `Olá ${nome}!
Como você está?
`;

//Strings: operador ponto
var str = "String de teste";
console.log(str.toLowerCase()); // string de teste
console.log(str.toUpperCase());// STRING DE TESTE


//Strings: replace

var manoelFeira = "Manoel foi à feira.";
var joanaFeira = manoelFeira.replace("Manoel", "Joana");

//Strings: tamanho
var manoelFeira = "Manoel foi à feira.";
var tamanho = manoelFeira.length;

//Strings: acesso à propriedade

var manoelFeira = "Manoel foi à feira.";
console.log(manoelFeira[0]); //M
console.log(manoelFeira[3]); //o

//Strings: indexOf
var manoelFeira = "Manoel foi à feira.";
console.log(manoelFeira.indexOf('feira')); //13
console.log(manoelFeira.indexOf('Joana')); //-1

//Strings: charCodeAt
var manoelFeira = "Manoel foi à feira.";
console.log(manoelFeira.charCodeAt(0)); // 77
console.log(manoelFeira.charCodeAt(3)); // 111

//document.write
document.write(`
    <h1>Lista de compras</h1>
    <ul>
        <li> Feijão </li>
        <li> Arroz </li>
        <li> Macarrão </li>
    </ul>
`);
