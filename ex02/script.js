const numAleatorios = [];
const tamanhoVetor = 7;

//loop para gerar e e armazenar os 7 números aleatórios
//Criação do índice i que começa em 0
//i<tamanhoVetor - o loop vai continuar rodando enquanto i for menor que 7
for (let i = 0; i < tamanhoVetor; i++){
    //Math.random() gera um decimal entre 0 e 1
    //Multiplicamos por 100 e somamos 1 para ter o intervalo de 1 a 100
    //*100 transforma o número quebrado
    //Math.floor() remove as casas decimais, deixando apenas o número inteiro
    let numGerado = Math.floor(Math.random() * 100) + 1; 

    //Armazeno o número diretamente no índice atual do vetor
    numAleatorios [i] = numGerado; 
}
alert("Números gerados automaticamente pelo computador: " + numAleatorios);