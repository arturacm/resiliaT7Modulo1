//sorteio específico
var sorteio54454 = [12, 32, 45, 60, 42, 7];
//histório dos sorteios
var sorteios = [
    [32, 15, 27, 55, 12, 38],
    [25, 17, 13, 22, 06, 01],
    [16, 18, 15, 38, 23, 29]
];

var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];
feira = feira.splice(2,2); 

var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];
feira[0] = 'pastel';

//comparando while com for
var nMastigadas = 0;
while(nMastigadas < 20) {
    console.log(`Mastigada de número ${nMastigadas} realizada`);
    nMastigadas++;
}
console.log('Finalmente engoliu!');

//for
var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];
for (var i=0; i < feira.length; i++) {
    console.log(`Fui à feira e comprei: ${feira[i]}`);
}
