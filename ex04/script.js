const textoDigitado = prompt("Digite 10 números separados por espaço:");
const vetorGeral = [];
let indiceVetor = 0;
let numTexto = "";

for (let i = 0; i < textoDigitado.length; i++){
    //esse loop olha letra por letra (caractere por caractere)
    const caractere = textoDigitado[i];
    //indica se o caractere atual é um espaço em branco
    if (caractere === " "){
        //o if garante que só vai adicionar o número se ele for de verdade
        if (numTexto !== ""){
            //pega o texto do número acumulado, transforma em número real e salva na gaveta atual do vetor
            vetorGeral[indiceVetor] = Number(numTexto);
            indiceVetor++;
            //limpa a caixa temporária deixando vazia de novo
            numTexto = "";
        }
    } else {
        numTexto += caractere;
    }
}
if (numTexto !== ""){
    //o bloco serve para pegar o último número digitado, que não é seguido por um espaço, e armazená-lo no vetor
    vetorGeral[indiceVetor] = Number(numTexto);
}
alert("Vetor original: " + vetorGeral); 

//Remover duplicatas
const vetorSemDuplicatas = [];
let indiceNovo = 0;

for (let i = 0; i < vetorGeral.length; i++){
    //esse bloco verifica se o número atual do vetorGeral já existe no vetorSemDuplicatas antes de adicioná-lo, garantindo que apenas números únicos sejam armazenados no vetorSemDuplicatas 
    let jaExiste = false;
    //j é o loop de dentro
    for (let j = 0; j < vetorSemDuplicatas.length; j++){
        //esse bloco compara o número atual do vetorGeral com cada número já presente no vetorSemDuplicatas. Se encontrar uma correspondência, define jaExiste como true e interrompe o loop interno, indicando que o número já foi adicionado ao vetorSemDuplicatas
        if (vetorGeral[i] === vetorSemDuplicatas[j]){
            jaExiste = true;
            //o break é usado para sair do loop interno
            break;
        }
    }
    if (!jaExiste){
        vetorSemDuplicatas[indiceNovo] = vetorGeral [i];
        indiceNovo++;
    }
}
alert("Vetor original: " + vetorGeral);
alert("Vetor sem duplicatas: " + vetorSemDuplicatas);