const vetor = [5, 12, 8, 7, 20, 3, 14, 9, 6, 11];
let somaPares = 0;

//Criação de um índice chamado i que começa em 0 
//i<vetor.length o loop vai ficar rodando enquanto i for menor que o vetor
//i++ a cada loop o i vai ser aumentado
for (let i = 0; i < vetor.length; i++) {
    //vetor[i] pega o valor atual do loop
    //% 2 divide o número por 2 e devolve o resto da divisão
    //=== 0 o if verifica se o resto da divisão é igual a 0, ou seja, se o número é par
    if (vetor[i] % 2 === 0) {
        //É como se falasse "A nova soma de pares é igual a soma que eu ja tinha antes + o número par atual"
        somaPares += vetor[i];
    }
}
alert("Soma dos números pares: " + somaPares);