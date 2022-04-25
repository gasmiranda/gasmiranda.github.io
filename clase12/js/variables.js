/*variables*/
let edad = 10;//tipo numbre
console.log(edad, typeof edad); //no es un alert()

console.log(typeof edad)

// puedo cambiar el valor de edad
edad = 20;
console.log(edad); //no es un alert()

/*quiero definir una variable numerica, pero que no se ueda modificar su valor*/
const altura = 174.5;
console.log(altura, typeof altura);
//altura = 200;
//console.log(altura); no lo puedo hacer porque quiero modificar un valor de una constante

var nombre = 'carlos';//define una variable de manera global

//tipo string
let apellido = 'lopez';

console.log(nombre, typeof nombre, apellido, typeof apellido);
//operador typeof

//definir variables con buleanos
const flag = true;
const iguales = false;
console.log(flag, typeof flag);

//arrays de string
const nobre =[];//es un array de string vacions

const materias =['lengua', 'ingles', 'etc']; //es un array de string que tiene 3 elementos
                  //0          1        2  
//nombre(variable)[posicion](dode se encuentra el elemento)=valor
let materia = materias[0]
console.error(materia);

//reasiganar en la variable materia el valor de materias[1]

console.info(materias[1]);

//crear un objeto
//quiero crear un objeto tipo persona
let persona = {
    edad: 36,/*nombreAtributo:Valor*/
    argentina: true,
    nombre: 'carlos',
    apellido: 'lopez',
    idiomas: ['español', 'ingles']
};

console.log(persona, typeof persona);

//undefined
let perro = undefined;
//perro.apodo = 100;
perro = {
    apodo: 'firulais',
}
console.log(perro, typeof pero);
perro ={
    apodo: 'perrito',
    edad: 100,
}
console.log(perro, typeof perro);

let gato = null;
gato = {edad: 100};
console.log(gato, typeof gato);

/* LOS TIPOS DE DATOS TIENEN FUNCIONES O METODOS*/
let nacionalidad = 'argentina';

//al ser un string puedo ejecutar ciertos metodos o funciones que tienen los metodos string
nacionalidad = nacionalidad.trim();
console.log(nacionalidad);

//convertir a mayuscula
nacionalidad = nacionalidad.toUpperCase();
console.log(nacionalidad);

nacionalidad = nacionalidad.toLocaleLowerCase();
console.log(nacionalidad);

//cantiadad de caracteres que tiene un string
console.log(nacionalidad.length);

//ejemplo de number y sus metodos
let valorNumericoGuardadoEnString = '100';

// sumaler 1
//valorNumericoGuardadoEnString = parseInt(valorNumericoGuardadoEnString) + 1;
//valorNumericoGuardadoEnString = +valorNumericoGuardadoEnString + 1;
valorNumericoGuardadoEnString = Number(valorNumericoGuardadoEnString) + 1;
console.log(valorNumericoGuardadoEnString)

//NaN: se da cuando quiero convertir a numero un texto no numerico
let valorFlotantEenString = '175.5';
console.log(parseInt(valorFlotantEenString))// convierte a entero unsa el 175
console.log(parseFloat(valorFlotantEenString))//toma los decimales
console.log(Number(valorFlotantEenString))//resuelve ambos parseInt y ParseFloat


