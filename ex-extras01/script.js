//Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, marcando os números que forem divisíveis por 4, exatamente como abaixo:
//30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
let contagemRegressiva = "";

//loop para a contagem regressiva
for (let i = 30; i >= 1; i--) { //i começa em 30 e vai diminuindo até chegar a 1
    if (i % 4 === 0) { //verifica se o número é divisível por 4
        contagemRegressiva += `[${i}] `;//adiciona o número entre colchetes à contagem regressiva
    } else {
        contagemRegressiva += `${i} `; //adiciona o número normal à contagem regressiva
    } 
}
alert(contagemRegressiva); //exibe a contagem regressiva completa com os números divisíveis por 4 destacados entre colchetes