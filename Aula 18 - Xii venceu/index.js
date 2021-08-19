function olaMundo(){
    alert("Fui clicado");
}

function novoInput(){
    var entradaUsr = prompt("Escolha 1 para ônibus e 2 para metrô");
while (true) {
    if (entradaUsr == 2 || entradaUsr == 1) {
        break;
    } else {
        alert("Entrada inválida!");
        entradaUsr = prompt("Escolha 1 para ônibus e 2 para metrô")
    }
}
 console.log("O usuario digitou "+ entradaUsr);
 if (entradaUsr == 2){
     olaMundo();
 }
}