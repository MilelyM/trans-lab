$(document).ready(function(){
    $('.sidenav').sidenav();
  });

document.getElementById('btnsaldo').addEventListener('click',carga);
//let strtarjeta=tarjeta.toString();

function carga(){
    let tarjeta=document.getElementById('numerot').value

 url=`https://www.psep.cl/api/Bip.php?&numberBip=${tarjeta}` ;
    fetch(url)
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

        .catch(e => console.log(e))
      
}
document.getElementById('btnHome').addEventListener('click', function Redirect() {

  window.location="https://milelym.github.io/trans-lab/index2.html";
})