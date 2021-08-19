// Entrada: [[‘lápis’, ‘caneta’, ‘borracha’], [‘chaves’, ‘anel’]], ‘caneta’ → Saída: Encontrado no pote 0
// Entrada: [[‘lápis’, ‘caneta’, ‘borracha’], [‘chaves’, ‘anel’]], ‘anel’ → Saída: Encontrado no pote 1
// Entrada: [[‘lápis’, ‘caneta’, ‘borracha’], [‘chaves’, ‘anel’]], ‘tesoura’ → Saída: Item não encontrado!

var mochila = [
    ['lapis','caneta','borracha'],['chaves','anel']
]


function olharMochila(item) {
    
    for(var i = 0; i<mochila.length ;i++ ){

        for(var j = 0; j<mochila[i].length ;j++ ){
            if(mochila[i][j] == item){
                return `Encontrado no pote ${i}`
            }
            
        }
    }
    return `Item não encontrado.`;
}

var itenInformado = prompt("Informe o item que deseja procurar");
document.write(olharMochila(itenInformado));