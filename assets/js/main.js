//var nome; // hoisting - içar.

//console.log(nome, " chamando a variável usando o var");

//const nome = "Avanade";
//////////////////////////////////////////////////////////////
/**
 * Existem 7 tipos de erros em JavaScript
 * --------------------------
 * SyntaxError - Escreveu alguma coisa errado.
 * ReferenceError - Chamou alguém que não existe.
 * TypeError - Erro de tipo é uma violação do JavaScripit.
 * EvalError - Evite o uso do comando eval, mas se ele for inválido
 * RangeError - Erro de intervalo, loop ifinito, ou chamadas inúmeras de recursividade
 * URIError - Erro referente a chamadas externas. Uniform Recurce Identifier. httpswww.
 * InternalError - Erro interno do JavaScript, falta de memória, processador...
 */
 //eval('console.log("Vai corintians");');

 //escreve("Museu do Ipiranga");
 //função nominal.
 function escreve(x) {
    console.log(x);
 }

 function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "</i>";
 }

mudaTitulo("Vai Corintias!");

//expressão de função
//função anônima - que não tem nome.
const mudaTitulo2 = function(){
  document.querySelector(targt).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando subtítulo");


const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

//setInterval(relogio, 1000);

//mudaFrase("h1", frases, 4);
//"h1" - onde;
//rases - array;
//4 - segundos;

const mudaFrase = (target, frases, tempo)=>{
   let total = 0
   setInterval(()=> {
      document.querySelector(target).innerHTML = 
      frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];

      console.log(total);
   },tempo * 10000);
};
//condicional?verdade:falso
mudaFrase("h1", frases, 4);
