let btnSumar = document.getElementById('btn-sumar');
let btnRestar =document.getElementById('btn-restar');


btnSumar.addEventListener('click', function(){
    limpiarResultado();
    let valor1 = parseInt(document.querySelector('#valor1').value);
    let valor2 = parseInt(document.querySelector('#valor2').value);
    sumar(valor1, valor2);
});

btnRestar.addEventListener('click', function(){
    limpiarResultado();
    let valor1 = parseInt(document.querySelector('#valor1').value);
    let valor2 = parseInt(document.querySelector('#valor2').value);
    restar(valor1, valor2);
});

function limpiarResultado(){
    document.querySelector('.resultado').innerHTML ='';
};

function sumar (num1, num2){
    let resultadoSuma = num1 + num2;
    document.querySelector('.resultado').innerHTML = resultadoSuma;
};

function restar (num1, num2){
    let resultadoResta = num1 - num2;
    if (resultadoResta < 0) {
        document.querySelector('.resultado').innerHTML = 0;
    }else{
        document.querySelector('.resultado').innerHTML = resultadoResta;
    }
};
