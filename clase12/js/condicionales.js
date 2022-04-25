let estudio = true;

//if
if(!estudio) {
   //si estudio es verdadero va a ejecutar la logica que esta dentro del IF
   alert('segui asi');
   //logica si true
}
else {
    //logica si false
    alert('vamos mal')
}

let edad = 5;
if(edad ===1) {
    alert('soy bebe');
}

else if(edad ===2) {
    alert('soy bebe de 2');
}else {
    alert('niño');
}

edad = 5;
/*estructura de seleccion switch*/
switch(edad) {
    case 1:
        alert('soy bebe');
        break;
    case 2:
        alert('soy bebe 2');
        break;
    default :
        alert('niño');  
}