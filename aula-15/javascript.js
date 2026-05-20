var issoEumaString = "Isso é uma string";
let issoEumnumero = 42;
const issoEumBooleano = true;
let issoTambemEumaString = "42";

//var e let são a mesma coisa = declaração de variável, apesar de diferença conceitual//
//var; isso é uma global // 
//não se pode reatribuir um valor à uma constante//


if(issoEumnumero===issoTambemEumaString){
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}


console.log(issoEumnumero + issoTambemEumaString);
//concatenar = somar um número e uma string = junção de um numero e uma string uma em frente à outra//

console.log(issoEumnumero + issoEumnumero);

var issoEumaGlobal = "Eu sou uma variável global";

{
let issoEumaLocal="Eu sou uma variável local";
console.log(issoEumaGlobal);
console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);
//console.log(issoEumaLocal);//
 
//let é uma variável local, declarada dentro de um bloco, fora dele, a variável deixa de existir/não funciona//
//var é uma variável global, irá funcionar em qualquer local do script//

//soma de valores decimais//
let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
//Podemos fazer assim://
// console.log(floatvalue1.toPrecision(1) + floatvalue2.toPrecision(2));//
// ou da seguinte forma://
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2));

for (let i = 0; i < 10; i+=2){
    console.log(i)
}

for (let i = 0; i < 5; i++){
    console.log(i)
    //imprimindo os algarismos com for//
    console.log(i*2)
    //imprimindo os pares com for//
    console.log(i*2+1)
    //imprimindo os ímpares com for//
}
//imprimindo os ímpares com while//
let j = 0;
while (j < 5) {
    console.log(j*2+1);
    j++;
}

console.log(Math.PI);
//valor de pi
console.log(Math.E);
//valor de euler
console.log(Math.sqrt(16));
//raiz quadrada
console.log(Math.pow(2, 3));
//multiplicação
console.log(Math.random());
//gera um número aleatório entre 0 e 9
console.log(Math.cos(90));


//números primos de 0 a 100//
function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
 return true;
}

for(let i =1; i<=100; i++) {
    isPrime(i) ? console.log(i): null;
}