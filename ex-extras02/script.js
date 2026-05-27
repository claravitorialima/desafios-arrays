//Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores do intervalo:
//Exemplo: Digite o primeiro valor
//Digite o último valor
//Digite o incremento
//Contagem: ... Acabou!

let valorInicial = parseFloat(prompt("Digite o valor inicial da cotagem:")); //parseFloat converte a string digitada pelo usuário em um número decimal, permitindo que o usuário digite números com casas decimais
let valorFinal = parseFloat(prompt("Digite o valor final da contagem:"));
let incremento = parseFloat(prompt("Digite o valor do incremento:"));
let contagem = "";//variável para armazenar a contagem gerada pelo loop

//loop contagem
//let i = valorInicial - inicialização
//i <= valorFinal - condição
for (let i = valorInicial; i <= valorFinal; i += incremento){ //i começa no valor inicial, vai aumentando de acordo com o incremento e para quando chegar ao valor final
    contagem += `${i} - `; //contagem recebe a contagem que já tinha antes + o número atual do loop 
}if (contagem === ""){ //verifica se a contagem está vazia, ou seja, se nenhum número foi gerado
    alert("Nenhum número foi gerado. Verifique os valores digitados e tente novamente.");
} else {
    alert("Contagem: " + contagem + "Acabou!");
}
