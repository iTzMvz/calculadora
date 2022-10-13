let visor = document.getElementById('visor');
let valor_salvo = null;
let operador_salvo = null;

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
        let resultado = executaOp(valorSalvo, operadorSalvo, Number(visor.innerHTML));
        visor.innerHTML = resultado;
        valorSalvo = null;
        operadorSalvo = null;
    }
}
function executaOp(valor1, operador, valor2){
    if (operador === "+"){
         return valor1 + valor2;
    } else if (operador === "-"){
        return valor1 - valor2;
    } else if (operador === "X"){
        return valor1 * valor2;
    } else if (operador === "/"){
        return valor1 / valor2
    }
}

document.getElementsByTagName('body')[0].addEventListener('keydown', pressiona_tecla);

function pressiona_tecla(event) {
    if (event.key === '*'){
        document.getElementById('multiplicacao').click();
    } else if (event.key === '1'){
        document.getElementById('1').click();
    } else if (event.key === '2'){
        document.getElementById('2').click();
    } else if (event.key === '3'){
        document.getElementById('3').click();
    } else if (event.key === '4'){
        document.getElementById('4').click();
    } else if (event.key === '5'){
        document.getElementById('5').click();
    } else if (event.key === '6'){
        document.getElementById('6').click();
    } else if (event.key === '7'){
        document.getElementById('7').click();
    } else if (event.key === '8'){
        document.getElementById('8').click();
    } else if (event.key === '9'){
        document.getElementById('9').click();
    } else if (event.key === '0'){
        document.getElementById('0').click();
    } else if (event.key === '-'){
        document.getElementById('subtracao').click();
    } else if (event.key === '+'){
        document.getElementById('adicao').click();
    } else if (event.key === '/'){
        document.getElementById('divisao').click();
    } else if (event.key === '.'){
        document.getElementById('ponto').click();
    } else if (event.keyCode === 13){
        document.getElementById('botao-igual').click();
    } 
}