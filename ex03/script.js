const vetorGeral = [10, 5, 8 ,10, 3, 10, 7, 5, 2, 10];
const numBuscado = Number(prompt("Digite um número inteiro que você deseja buscar no vetor:"));

let contadorVezes = 0;

for (let i = 0; i < vetorGeral.length; i++){
    if (vetorGeral[i] === numBuscado){
        contadorVezes += 1;
    }
}
alert("O número " + numBuscado + " aparece " + contadorVezes + " vezes no vetor."); 