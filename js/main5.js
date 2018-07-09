$(document).ready(function(){
    $('.sidenav').sidenav();
  });

document.getElementById('btnsaldo').addEventListener('click',carga);
//let strtarjeta=tarjeta.toString();

function carga(){
    let tarjeta=document.getElementById('numerot').value

    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${tarjeta}`)
        .then(function(resp) {
            return resp.json();
  
        })
        .then(function (valores) {
        let data = Object.values(valores)
        console.log(valores);
         let numeroTarjeta = data[0];
         let estadoContrato = data[1];
         let saldoTarjeta = data[2]
           data[0] =document.getElementById('numerot').value;
         console.log(data);
           // console.log(estadoContrato);
            console.log(saldoTarjeta);
            document.getElementById('cajaDeTexto').innerHTML= saldoTarjeta;
            
        })
      
}
document.getElementById('btnHome').addEventListener('click', function Redirect() {

  window.location="file:///home/laboratoria/Escritorio/proyectos/trans-lab/index2.html";
})
document.getElementById('btnPerfil').addEventListener('click', function Redirect() {

  window.location="file:///home/laboratoria/Escritorio/proyectos/trans-lab/index3.html";

})
document.getElementById('btnSaldo').addEventListener('click', function Redirect() {

  window.location="file:///home/laboratoria/Escritorio/proyectos/trans-lab/index5.html";
})