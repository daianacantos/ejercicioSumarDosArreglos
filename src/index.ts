/*Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario.
Ejemplo:
v1 = 1, 3, 7, 9, 9, 5;
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9*/

//let numeros1: number = Number(prompt(" ingrese numeros del array1"));
//let numeros2: number = Number(prompt(" ingrese numeros del array2"));
let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let arreglo3: number[] = new Array(6);

for (let i = 0; i < arreglo1.length; i++) {
  arreglo1[i] = Number(prompt("ingresar numeros del Array1"));
}
console.log(" los numeros del Array1 son:" + arreglo1);

for (let i = 0; i < arreglo2.length; i++) {
  arreglo2[i] = Number(prompt("ingresar numeros del Array2"));
}
console.log(" los numeros del Array2 son:" + arreglo2);

for (let i = 0; i < arreglo3.length; i++) {
  arreglo3[i] = arreglo1[i] + arreglo2[i];
  let contador = 0;
  contador = contador + 1;
}
console.log(" la suma del Array1 + Array2 es:" + arreglo3);
