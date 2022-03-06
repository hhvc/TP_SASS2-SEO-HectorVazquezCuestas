// INICIO BOTÓN MODODARK INDEX
// const btnSwitch=document.querySelector("#switch");
const btnSwitch=document.getElementById("switch");
btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
// Guardo configuración de Modo Dark en localstorage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }   else{
            localStorage.setItem('dark-mode', 'false');
    }
});
//   fin botón MODO DARK
// INICIO COMPROBACIÓN DE MODO ACTUAL
if(localStorage.getItem('dark-mode')==='true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}   else{
        document.body.classList.remove('dark');
        btnSwitch.classList.remove('active');
}
// fin comprobación Modo Dark