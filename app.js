let listaDeNumeroSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});



}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'jogo do Número secreto');
exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
} 
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativa = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativa);
       





 } else {
            if (chute > numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto e menor que o chute!');

            } else{
                exibirTextoNaTela('p','o número secreto e maior que o chute!');


            } 

            tentativas++;
            limparcampo();
         }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumeroSorteados.length;
    if(quantidadeDeElementosNalista == 3 ){
       listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();
    } else {
       listaDeNumeroSorteados.push(numeroEscolhido);
       console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
   
    }
   
   }
   function limparcampo(){
       chute = document.querySelector('input');
       chute.value = '';
   
   }
   function reiniciarjogo(){
           numeroSecreto = gerarNumeroAleatorio();
           limparcampo ();
           tentativas = 1;
          exibirMensagemInicial();
          document.getElementById('reiniciar').setAttribute('disabled', true);



   }









          
   
   