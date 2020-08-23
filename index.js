
function suma(x, y) {
  // suma(2,3) // Retorna 5
  return x+y;
  
}

function multiplica(x, y) {
  // multiplica(2,3) // Retorna 6
  return x*y;
}

function mayorQueTreinta(num) {
  // mayorQueTreinta(50) // Retorna true
if (num<30) {
  return false;
} else {
  return true;
}
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
if (idioma == 'aleman') {
  return 'Guten Tag!'
} else if (idioma == 'ingles') {
  return 'Hello!'
} else if (idioma == 'mandarin') {
  return 'Ni Hao!'
} else if (idioma == 'frances') {
  return 'Hola!'
} else {
  return 'Hola!'
}
}

function esEntero(numero) {
  // esEntero(50) // Retorna true
  // esEntero(0.8) // Retorna false
if (numero%1 == 0) {
  return true;
} else {
  return false;
}
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if (numero%5 == 0 && numero%3 == 0) {
  return "fizzbuzz"
}
if (numero%3 == 0) {
  return "fizz"
}
if (numero%5 == 0) {
  return "buzz"
} else {
  return numero;
}
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
  
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
pal=palabras.join(" ");
return pal;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
let sum=resultadosTest.reduce((previous, current)=>current+=previous);
let prom=sum/(resultadosTest.length);
return prom;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  var cant_div=0;
    if (numero==0) {
       return false
    }
    else {
        for (var i=1; i<=numero; i++){
        // Verificación del residuo
        var residuo=numero%i;
            if (residuo==0) {
                // Sumar 1 a la cantidad de divisores e impresión
                cant_div=cant_div+1;
            }
        }
        // Verificación de número primo
        if (numero>1&&cant_div==2){
          return true
        }
        else {
          return false;
        }
    }
}


module.exports = {
  suma,
  multiplica,
  mayorQueTreinta,
  saludo,
  esEntero,
  fizzBuzz,
  obtenerLargoDelArray,
  dePalabrasAFrase,
  promedioResultadosTest,
  esPrimo
}
