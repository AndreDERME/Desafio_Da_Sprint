let consumoHtml = document.getElementById ("consumo_id")
let menorHtml = document.getElementById ("menor_id")
let mediaHtml = document.getElementsByClassName ("media_p")
let gastoHtml = document.getElementsByClassName ("gasto_p")

let Distancia_percorrida = parseFloat (prompt (" Qual a sua distância percorrida de sua casa ao seu trabalho: "));

while ( isNaN(Distancia_percorrida) || Distancia_percorrida < 0  ){

    alert ("Porfavor ensira um numero valido.");

    Distancia_percorrida = parseFloat (prompt (" Qual a sua distância percorrida de sua casa ao seu trabalho: "));

}

let ConsumoVeiculo = parseFloat (prompt ("Qual consumo medio do seu veiculo (em km/L): "));

while (isNaN (ConsumoVeiculo) || ConsumoVeiculo < 0){

    alert ("porfavor ensira um numero valido.");

    ConsumoVeiculo = parseFloat (prompt ("Qual consumo medio do seu veiculo (em km/L):"));

}
var NecessidadeLitros = Distancia_percorrida/ConsumoVeiculo;

alert ( `O consumo necessario é  ${(NecessidadeLitros.toFixed(2))}`);

let soma = 0;

loopPrincipal : while (true) {

let Quantidade_Postos = parseInt (prompt ("Qual a quantidade de postos que você pesquisou:"));
while (isNaN (Quantidade_Postos) || Quantidade_Postos < 0 || Quantidade_Postos > 20){
    alert ("porfavor ensira um numero valido.");
     Quantidade_Postos = parseFloat (prompt ("Qual a quantidade de postos que você pesquisou:"));
     if (Quantidade_Postos > 20) {
        alert ("Coloque um valor abaixo de 20")
        Quantidade_Postos = parseFloat (prompt ("Qual a quantidade de postos que você pesquisou:"));
     }

}
let menorValor = 0;

//enquanto o usuario digitar as quantidades de postos vai aparecer o prompt;

for (let i = Quantidade_Postos; i > 0 ; i--){
  let postos_Pesquisados;
   // --------------------------------------------------------------------------------------------------
    while (true){
     let valorDigitado = parseFloat (prompt (`Qual o valor do posto ${i}`));   
     postos_Pesquisados = (valorDigitado);
     
    if (postos_Pesquisados > 100) {
        alert ("Coloque um valor abaixo de 100 reais");
        continue loopPrincipal;
    } 
    
    if ( postos_Pesquisados < 0 || isNaN (postos_Pesquisados) ){
        alert ("Coloque um resultado valido")
        continue ;
    }
    break;
}
     
  // --------------------------------------------------------------------------------------------------
    if ( !menorValor ){

    menorValor = postos_Pesquisados;
}

    if (postos_Pesquisados < menorValor) {

     menorValor = postos_Pesquisados;
}
    soma += postos_Pesquisados;


  // -------------------------------------------------------------------------------------------------- 

}
// para que vc possa achar um menor valor das coisas digitadas pelos usuarios utiliza-se esse codigo
   

let gasto_Necessario = ( ConsumoVeiculo  * menorValor  )  *2;
let mediaPreços = soma / Quantidade_Postos;


consumoHtml.innerText = `O consumo necessario é  ${NecessidadeLitros.toFixed(2)}`;
menorHtml.innerText = `esse foi o menor valor ${menorValor.toFixed(2)}`;
mediaHtml [0].innerText = "essa foi a média dos valores " + (mediaPreços.toFixed(2));
gastoHtml [0].innerText = "O gasto diario (ida e volta): " + (gasto_Necessario.toFixed(2));

break ;

}