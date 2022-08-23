alert("Bienvenidos, escoga el numero de su camiseta de futbol")

 for(let i = 1; i <= 5; i++){

   if( i === 1){
       alert("La camiseta N° 1 no esta disponible, ese numero es del arquero")
       continue
   };

   if( i === 3){
       alert("Este es el libero")
   }

   if( i === 4){
       alert("Este es lateral izquierdo")
   }

   if( i === 5){
       alert("Este es lateral derecho")
   }

   let nombre = prompt("ingrese su nombre para asignar un numero de camiseta");

   let mensaje = `El jugador ${nombre} tiene el numero ${i} `;

   alert(mensaje)

}

alert("Se acabaron los numeros para los jugadores")



        

