document.getElementById('btnsaldo').addEventListener('click',carga);
let tarjeta=document.getElementById('numerot').value
//let strtarjeta=tarjeta.toString();


function carga(){
 url='http://www.psep.cl/api/Bip.php?&numberBip=89515804' ;
    fetch(url)
    
        .then(function(resp) {
            return resp.json();
  
        })
        .then(function (valores) {
        let data = Object.values(valores)
        // console.log(valores);
        // let numeroTarjeta = data[0];
         let estadoContrato = data[1];
         let saldoTarjeta = data[2]
           data[0] =document.getElementById('numerot').value;
         console.log(data);
           // console.log(estadoContrato);
           // console.log(saldoTarjeta);
            document.getElementById('cajaDeTexto').innerHTML= saldoTarjeta;
            

        
        })

       // .catch(e => console.log(e))
      
}
/*function muestra(resp){
             for(key in resp){
                if(key===url){
   let nuevourl= url+`${numerot}`
             console.log(nuevourl);     
             }
            }
    }

*/