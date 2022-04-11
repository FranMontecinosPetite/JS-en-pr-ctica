let boton1 = document.getElementById('btn-1');
let boton2 = document.getElementById('btn-2');
let boton3 = document.getElementById('btn-3');
let boton4 = document.getElementById('btn-4');
let boton5 = document.getElementById('btn-5');
let boton6 = document.getElementById('btn-6');
let caja = document.getElementById('caja');

boton1.addEventListener('click', function(){
    caja.style.background = '#e53e3e';
});
boton2.addEventListener('click', function(){
    caja.style.background = '#dd6b20';
});
boton3.addEventListener('click', function(){
    caja.style.background = '#faf089';
});
boton4.addEventListener('click', function(){
    caja.style.background = '#48bb78';
});
boton5.addEventListener('click', function(){
    caja.style.background = '#81e6d9';
});
boton6.addEventListener('click', function(){
    caja.style.background = '#d53f8c';
});
