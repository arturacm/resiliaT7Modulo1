var saborPizza = prompt("Qual é o sabor da pizza escolhida? Disponiveis: Calabresa e Marguerita");
var dia = "quarta";
var chuva = false;

if(!chuva){
    console.log("esta chuvendo, desculpa a entrega vai demorar")
}


if(saborPizza == "calabresa" || saborPizza == "marguerita"){
    console.log("Começando a fazer pizza " + saborPizza);
    
} else {
    console.log("Sabor da pizza informado não disponível!");
}

if((saborPizza == "marguerita"|| saborPizza == "calabresa") && dia == "quarta"){
    console.log("PROMO frete gratis");
}

// if (saborPizza == "marguerita") {
//     console.log("Começando a fazer pizza marguerita");

// }else if (saborPizza == "quatro queijos"){
//     console.log("Começando a fazer pizza quatro queijos");

// }else if(saborPizza == "calabresa"){
//     console.log("Começando a fazer pizza calabresa");
    
// } else {
//     console.log("Sabor da pizza informado não disponível!");
// }
