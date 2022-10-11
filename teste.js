let visor = document.getElementById('visor');
let valor_salvo = null;
let operador_salvo

let btnNumeros = document.getElementsByClassName('botao-numero');
for (let botao of btnNumeros){
    botao.addEventListener('click', clica_numero);
}
function clica_numero(event){
    if (isNaN(visor.innerHTML) === true)
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    else
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

let btnOperadores = document.getElementsByClassName('botao-operador');
for (let botao of btnOperadores){
    botao.addEventListener("click", clica_operador);
}
function clica_operador(event){
    if (isNaN(visor.innerHTML) === false){
        if (valor_salvo === null){
            valor_salvo = Number(visor.innerHTML);
        }else{
            let result = executa_operacao(valor_salvo,operador_salvo,Number(visor.innerHTML));
            valor_salvo = result;
        }
    }
    visor.innerHTML = event.target.innerHTML;
    operador_salvo = event.target.innerHTML;
}
let botaoC = document.getElementById('botao-C');
botaoC.addEventListener("click", limpa_visor);
function limpa_visor(event){
    visor.innerHTML = "";
    valor_salvo = null;
    operador_salvo = null;
}
let botaoIgual = document.getElementById('botao-igual')

botaoIgual.addEventListener('click', calcula_resultado);

function calcula_resultado(event) {
    if(valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false){
        let result
    }
}