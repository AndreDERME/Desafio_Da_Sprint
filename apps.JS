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
let Quantidade_Postos = parseInt (prompt ("Qual a quantidade de postos que você pesquisou:"));

while (isNaN (Quantidade_Postos) || Quantidade_Postos < 0 || Quantidade_Postos > 20){
    alert ("porfavor ensira um numero valido.");
     Quantidade_Postos = parseFloat (prompt ("Qual a quantidade de postos que você pesquisou:"));
     if (Quantidade_Postos > 20){
        alert ("Coloque um valor abaixo de 20")
     }

}
let menorValor = 0;

//enquanto o usuario digitar as quantidades de postos vai aparecer o prompt;

for (let i = Quantidade_Postos; i > 0 ; i--){
    let postos_Pesquisados = parseFloat (prompt (`Qual o valor do posto ${i}`));
    while (isNaN (postos_Pesquisados) || postos_Pesquisados < 0 || postos_Pesquisados > 100){
    alert ("porfavor ensira um numero valido.");
    postos_Pesquisados = parseFloat (prompt ("Qual a quantidade de postos que você pesquisou:"));
    if (postos_Pesquisados > 100){
        alert ("Coloque um valor abaixo de 100 reais")
    }
    
     
}

    
// para que vc possa achar um menor valor das coisas digitadas pelos usuarios utiliza-se esse codigo
    if ( !menorValor ){

    menorValor = postos_Pesquisados;
    
    }

    if (postos_Pesquisados < menorValor) {

     menorValor = postos_Pesquisados;

}
    soma += postos_Pesquisados;
    soma / postos_Pesquisados;



}


let gasto_Necessario = 2*(ConsumoVeiculo * menorValor);

alert (`esse foi o menor valor ${menorValor.toFixed(2)}`);

alert ("essa foi a média dos valores " + (soma.toFixed(2)));

alert ( `O consumo necessario é  ${NecessidadeLitros.toFixed(2)}`);

alert ("O gasto diario (ida e volta): "+ (gasto_Necessario.toFixed(2)));

// se o menor valor do posto pequisado

// if (menorValor !== Infinity){

 //     alert (`esse foi o menor valor ${menorValor}`);
 //  }

//  else {

//     alert ("nenhum valor foi obtido.");

//  }
   

