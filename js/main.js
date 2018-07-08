
function savedata() { //funcion para guardar comentario
    //validación inputs, usamos if para que no se imprima un mensaje vacío
document.getElementById('btnSesion').addEventListener('click', function Redirect() {
   // var codPasw='[0-9]{8}';
   // var codMail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
if((document.getElementById('icon_email').value === '') || (document.getElementById('icon_password').value ==='')) {
    alert('no puedes dejar campos vacíos')
} else {
    let email = document.getElementById('icon_email').value;
    let password = document.getElementById('icon_password').value;
    localStorage.setItem(email,password); //En este punto guardo nombre y comment en mi local storage
    window.location="https://milelym.github.io/trans-lab/index2.html";
}
})
}
savedata()