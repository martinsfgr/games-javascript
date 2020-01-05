//mapeamento das variaveis globais:
//  - nodelist das divs que conterão as imagens
//  - lista das imagens que serão usadas nas divs
//  - variável com o método concat para duplicar as imagens
//  - variável com as imagens embaralhadas
//  - variáveis vazias com a primeira e a segunda carta

//mapeamento das funções:
// - função para embaralhar as cartas
// - função para revelar a carta
// - função para esconder a carta
// - função para iniciar a jogada
// - função para executar a jogada
// - função para verificar as cartas iguais
// - função para travar os cliques (tratamento de erro)
// - função para bloquear cliques em cartas encontradas

let cartas = document.getElementsByClassName('cards');
console.log(cartas)

let imagens = ["babyfaust.jpg", "cakefaust.jpg", "coolfaust.jpg", "darkfaust.jpg", "erroufaust.jpg", "kingfaust.jpg"];
let imagensDuplicadas = imagens.concat(imagens);
console.log('Essa é a lista duplicada', imagensDuplicadas);

function embaralharCartas(listaImagens){
    let posicaoAleatoria;
    let posicaoIterador;

    for(let i = listaImagens.length - 1; i !== 0; i--){
        posicaoAleatoria = Math.floor(Math.random() * i);

        posicaoIterador = listaImagens[i];
        listaImagens[i] = listaImagens[posicaoAleatoria];
        listaImagens[posicaoAleatoria] = posicaoIterador;
    }

    return listaImagens;
}

let imagensEmbaralhadas = embaralharCartas(imagensDuplicadas);
console.log('Essa é a lista embaralhada', imagensEmbaralhadas);