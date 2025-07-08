let Distancia_percorrida = parseFloat (prompt (" Qual a sua distância percorrida de sua casa ao seu trabalho: "));

let ConsumoVeiculo = parseFloat (prompt ("Qual consumo medio do seu veiculo (em km/L): "));

var NecessidadeLitros = Distancia_percorrida/ConsumoVeiculo;

alert ( `O consumo necessario é  ${NecessidadeLitros}`);

//enquanto o usuario digitar as quantidades de postos vai aparecer o prompt;

let Quantidade_Postos =parseInt (prompt ("Qual a quantidade de postos que você pesquisou:"))
let menorValor = Infinity;
for (let i = 0; i < Quantidade_Postos; i++){

    let Postos_Pesquisados = parseFloat (prompt (`Qual o valor do posto ${i + 1}`))
     // para que vc possa achar um menor valor das coisas digitadas pelos usuarios utiliza-se esse codigo
    if (Postos_Pesquisados < menorValor) {
        menorValor = Postos_Pesquisados

    }
     // se o menor valor do posto pequisado
    
}
    
    if (menorValor !== Infinity){
        alert (`esse foi o menor valor ${menorValor}`)
     }
     else {
        alert ("nenhum valor foi obtido.")
     }
     
   

