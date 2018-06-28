document.getElementById('btnsaldo').addEventListener('click',carga);
let tarjeta=document.getElementById('numeroT').value
//let strtarjeta=tarjeta.toString();

url='http://www.psep.cl/api/Bip.php?&numberBip=20795394' ;
function carga(){
 
    fetch(url)
        .then(function(resp) {
          // console.log(resp)
            return resp.json();
 
        })
        .then(function (valores) {
        let data = Object.values(valores)
        // console.log(valores);
        // let numeroTarjeta = data[0];
         let estadoContrato = data[1];
         let saldoTarjeta = data[2]
           data[0] =document.getElementById('numeroT').value;
         console.log(data);
           // console.log(estadoContrato);
           // console.log(saldoTarjeta);
            document.getElementById('cajaDeTexto').innerHTML= saldoTarjeta;
            

        
        })

       // .catch(e => console.log(e))
      
}
/*function muestra(){
    if(url='http://www.psep.cl/api/Bip.php?&numberBip='){
        let str='';
        url

    }
}*/
