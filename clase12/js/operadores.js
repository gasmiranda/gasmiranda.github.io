/*
      Aritmeticos
      Logicos
      Relacionales
      Asignacion
*/

//Aritmeticos +, - , / , * , ++ , -- 
let a = 10;
let b = 20;
console.log(a,b);

let c = a + b;//=30
console.log(c,'+')

let d = a - b;//-10
console.log(d,'-');

let div = a/b;
console.log(div,'/')

let multi = a*b;
console.log(multi,'*');

/*% es el resto de una divicion*/
let anio = 2022;
//quiero saber si el año es par o inpar
let resto = anio % 2;
console.log(resto);

//incremento ++
let valor = 0;
valor = valor +1;
console.log(valor,'valor');
valor++;
console.log(valor,'valor');
//linea 32 es = linea 34

//decremento--
valor = valor -1;
valor--;
console.log(valor,'valor');

/*OPERADORES LEGICOS*/
//AND &&, OR ||, NOT !
let username = 'root';
let password = '1234';

username === 'root' && password === '1234';

let usuarioValidoAnd = (username === 'root' && password === '1234');
let usuarioValidoOr = (username === 'root' || password === '1234');

let usuarioValidoNot = username !=='root';

/*RELACIONALES*/
let x = 10;
let Y = 20;
let xMayory = (10 > 20);
console.log(x,'>', Y, x > Y);
console.log(x,'<', Y, x < Y);
console.log(x,'===', Y, x === Y);
console.log(x,'>=', Y, x >= Y);
console.log(x,'<=', Y, x <= Y);

