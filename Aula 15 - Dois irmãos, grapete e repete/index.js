var nMastigadas = 0;
while(nMastigadas < 1000) {
    console.log(`Mastigada de número ${nMastigadas} realizada`);
    nMastigadas++;
}
console.log('Finalmente engoliu!');

// Array: inicialização

var listaConvid1 = ['Kelwin', 'Thaís', 'Paulinha'];
var listaConvid2 = new Array('Fábio', 'Dudu', 'Vic', 'Jansen');

//Array: inserção
var listaConvid = [];
listaConvid.push('Amanda');
listaConvid.push('Nina', 'Bruno', 'Carol');


// Arrays: acessando elementos
var listaConvid = ['Vê', 'Thomaz', 'Cinthia', 'Luiz', 'Nic'];
var primeiroConvid = listaConvid[0];

//Arrays e loops
var listaConvid = ['Vê', 'Thomaz', 'Cinthia', 'Luiz', 'Nic'];
var indice = 0;
while( indice < listaConvid.length ) {
    console.log(listaConvid[indice]);
    indice++;
} 
