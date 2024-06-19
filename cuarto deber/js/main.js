class tarea{
    // numeros
  
    regresarAlMenuNumeros() {
        window.location.href = 'menu_numeros.html'; // Reemplaza con la ruta correcta
    }
    limpiarResultado() {
        document.getElementById('resultado').innerHTML = 'Aquí se mostrará el resultado:';
    }
    regresarAlMenuArreglos() {
        window.location.href = 'menu_arreglos.html';
    }
    limpiarResultado() {
        document.getElementById('numeros').value = ''; // Limpia el campo de entrada
        document.getElementById('resultado').textContent = ''; // Limpia el campo de salida
    }
    
    
    //ejercicicio1
    // Presentar un mensaje N veces
presentarMensajeNVeces() {
    let mensaje = document.getElementById('mensajeUsuario').value;
    let veces = parseInt(document.getElementById('veces').value);
    let resultadoHTML = '';

    for (let i = 0; i < veces; i++) {
        resultadoHTML += '<p>' + mensaje + '</p>';
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

//ejercicio 2
presentarmultiplo7(){
    let num=0, i=0, msg="", r
    num = document.getElementById("num").value
    r = document.getElementById("resp")
    for(i = 1; i <= num; i++){
        if(i % 7 === 0){
            msg += i + "<br>" +  " "
        }
    }
    r.innerHTML = msg
}

//ejercicio 3.Presentar números múltiplos de cualquier número hasta N

presentarMultiplos() {
    let numeroBase = document.getElementById('numeroBase').value;
    let resultadoMultiplos = document.getElementById('resultadoMultiplos');
    resultadoMultiplos.innerHTML = '';

    if (numeroBase) {
        numeroBase = parseInt(numeroBase);
        for (var i = 1; i <= numeroBase; i++) {
            if (numeroBase % i === 0) { // Verifica si 'i' es múltiplo de 'numeroBase'
                resultadoMultiplos.innerHTML += '<p>' + i + ' ' + '</p>';
            }
        }
    }
}
//ejercicio 4
positivos(){
    let num=0, i=0, msg="", r
    num = document.getElementById("num").value
    r = document.getElementById("resp")
    for(i = 1; i <= num; i++){
        if(i % 2 === 0){
            msg += i + "<br>" +  " "
        }
    }
    r.innerHTML = msg
}
//ejercicio 5.Presentar los numero Pares de N numeros
presentarNumerosPares() {
    let numeroN = parseInt(document.getElementById('numeroN').value);
    let resultadoHTML = '';

    for (let i = 0; i <= numeroN; i++) {
        if (i % 2 === 0) { // Verifica si 'i' es un número par
            resultadoHTML += '<p>' + i + '</p>';
        }
    }

    document.getElementById('resultadoPares').innerHTML = resultadoHTML;
}


//ejercicio 6
presentardivisores(){
    let num=0, i=0, msg="", r
    num = document.getElementById("num").value
    r = document.getElementById("resp")
    for(i = 1; i <= num ;i++){
        if(num % i === 0){
            msg += i + "<br>"+ " "
        }
    }
    r.innerHTML = msg
}

//ejercicio 7
//Presentar la tabla de sumar del 10 del 1 al 12 Ejemplo: (1+2=3 …12+2=14)
presentarTablaSumar() {
    let resultadoHTML = '';
    let numeroBase = 10; // Número base para la suma

    for (let i = 1; i <= 12; i++) {
        resultadoHTML += '<p>' + numeroBase + ' + ' + i + ' = ' + (numeroBase + i) + '</p>';
    }

    document.getElementById('resultadoTablaSumar').innerHTML = resultadoHTML;
}

//ejercicio 8
presentarTabla() {
    let tablaDe = document.getElementById('tablaDe').value;
    let desdeValor = document.getElementById('desdeValor').value;
    let hastaValor = document.getElementById('hastaValor').value;
    let resultadoTablaMultiplicar = document.getElementById('resultadoTablaMultiplicar');

    if (tablaDe > 0 && desdeValor > 0 && hastaValor > 0) {
        resultadoTablaMultiplicar.innerHTML = '';
        for (var i = desdeValor; i <= hastaValor; i++) {
            resultadoTablaMultiplicar.innerHTML += tablaDe + " * " + i + " = " + (parseInt(tablaDe) * parseInt(i)) + "<br>";
        }
    } 
    else {
        resultadoTablaMultiplicar.innerHTML = 'Por favor ingrese números válidos.';
    }
}

//ejercicio 9
//Presentar los numeros comprendidos entre dos numeros
presentarNumerosComprendidos() {
    let numeroInicio = parseInt(document.getElementById('numeroInicio').value);
    let numeroFin = parseInt(document.getElementById('numeroFin').value);
    let resultadoHTML = '';

    if (numeroInicio < numeroFin) {
        for (let i = numeroInicio; i <= numeroFin; i++) {
            resultadoHTML += '<p>' + i + '</p>';
        }
    } else {
        resultadoHTML = '<p>El número inicial debe ser menor que el número final.</p>';
    }

    document.getElementById('resultadoNumerosComprendidos').innerHTML = resultadoHTML;
}

//ejercicio 10
presentarNumerosComprendidosPar(){
    let ini = parseInt(document.getElementById("ini").value);
    let fin = parseInt(document.getElementById("fin").value);
    let resultadoHTML = " ";
    if (ini < fin){
        for(let i = ini; i <= fin; i++){
            if(i % 2 === 0){
                resultadoHTML += "<br>" + i + "</br>"
            }
        }
    }
    document.getElementById("resp").innerHTML = resultadoHTML
}

//USO DE ARREGLOS
//ejercicio 11
//Ingresar datos en un arreglo: Crea un programa que permita al usuario ingresar 5 números en un arreglo y luego imprima todos los números.
ingresarDatosArreglo() {
    let numeros = [];
    numeros.push(parseInt(document.getElementById('numero1').value));
    numeros.push(parseInt(document.getElementById('numero2').value));
    numeros.push(parseInt(document.getElementById('numero3').value));
    numeros.push(parseInt(document.getElementById('numero4').value));
    numeros.push(parseInt(document.getElementById('numero5').value));

    let resultadoHTML = 'Números del arreglo: <br>';

    for (let i = 0; i < numeros.length; i++) {
        resultadoHTML += '<p>' + numeros[i] + '</p>';
    }

    document.getElementById('resultadoArregloNumeros').innerHTML = resultadoHTML;
}

//ejercicio 12
//Números pares: Crea un programa que permita al usuario ingresar 10 números 
//en un arreglo y luego imprima solo los números pares.
arregloPares(){
    let num= document.getElementById("num").value;
    let arraynum = num.split(",").map(Number);
    let resultadoHTML = "resp"
    if(arraynum.length === 10){
     for(let i = 0; i < arraynum.length; i++){
         if(arraynum[i] % 2 === 0){
            resultadoHTML += arraynum[i];
            document.getElementById("resp").innerHTML = resultadoHTML
             }
         }
    }
    else{
        document.getElementById("resp").innerHTML = "Por favor ingrese 10 numero" + resultadoHTML
    }
}
//ejercicio 13
//Suma de los elementos: Crea un programa que permita al usuario ingresar 8 números en un arreglo y luego imprima la suma de todos los números
sumarElementos() {
    let numeros = document.getElementById('numeros').value;
    let arregloNumeros = numeros.split(',').map(Number);
    if (arregloNumeros.length === 8) {
        let suma = 0;
        for (let i = 0; i < arregloNumeros.length; i++) {
            suma += arregloNumeros[i];
        }
        document.getElementById('resultado').textContent = 'La suma es: ' + suma;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingrese exactamente 8 números.';
    }
}


//ejercicio 14
//Promedio de los elementos: Crea un programa que permita al usuario ingresar 
//6 números en un arreglo y luego imprima el promedio de los números.
arrayPromedio(){
    let notas = document.getElementById("notas").value;
    let arrNot = notas.split(",").map(Number);
    let resultadoHTML = "resp"
    if(arrNot.length === 6){
        let suma = 0
        for(let i = 0; i < arrNot.length; i++){
           suma += arrNot[i]
           let promedio = suma / arrNot.length
           resultadoHTML = promedio
           document.getElementById("resp").innerHTML = resultadoHTML
        }
    }
    else{
        document.getElementById("resp").innerHTML = " Ingrese 6 numeros " + resultadoHTML
    }
}
//ejercicio 15
//Mayor y menor número: Crea un programa que permita al usuario ingresar 7 números en un arreglo y luego imprima el mayor y el menor número.
encontrarMayorMenor(){
    let numeros = document.getElementById('numeros').value.split(',').map(Number);
    if (numeros.length === 7) {
        let mayor = Math.max(...numeros);
        let menor = Math.min(...numeros);
        document.getElementById('resultado').textContent = 'El número mayor es: ' + mayor + ' y el número menor es: ' + menor;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingrese exactamente 7 números.';
    }
}
//ejercicio 16
//Números positivos y negativos: Crea un programa que permita al usuario 
//ingresar 10 números en un arreglo y luego imprima los números positivos y 
//negativos por separado.
arrayPosNeg(){
    let num= document.getElementById("num").value;
    let arraynum = num.split(",").map(Number);
    let resultadoHTML = "respuesta: "
    let r = "negativos: "
    if(arraynum.length === 10){
     for(let i = 0; i < arraynum.length; i++){
         if(arraynum[i] % 2 === 0){
            resultadoHTML += arraynum[i];
            document.getElementById("respuesta: ").innerHTML = "Numeros Pares: "  + resultadoHTML
             }
             else{
                r += arraynum[i];
                document.getElementById("negativos: ").innerHTML = "Numeros Impares" + r
         }
         }
    }
    else{
        document.getElementById("resp").innerHTML = "Por favor ingrese 10 numero" + resultadoHTML
    }
}
//ejercicio 17
//Contar ocurrencias de un número: Crea un programa que permita al usuario ingresar 10 números en un arreglo y luego pregunte al usuario por un número específico, e imprima cuántas veces aparece ese número en el arreglo.
contarOcurrencias() {
    let numeros = document.getElementById('numeros').value.split(',').map(Number);
    let numeroABuscar =+document.getElementById('numeroABuscar').value;
    let contador = 0;
    let esValido = true;
    if (numeros.length !== 10) {
        esValido = false;
        document.getElementById('resultado').textContent = 'Por favor, ingrese exactamente 10 números.';
    }
    for (let i = 0; i < numeros.length && esValido; i++) {
        if (isNaN(numeros[i])) {
            esValido = false;
            document.getElementById('resultado').textContent = 'Por favor, asegúrese de que todos los números sean válidos.';
        }
    }
    if (esValido) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] === numeroABuscar) {
                contador++;
            }
        }
        document.getElementById('resultado').textContent = 'El número ' + numeroABuscar + ' aparece ' + contador + ' veces en el arreglo.';
    }
}

//ejercicio 18
//Números en orden inverso: Crea un programa que permita al usuario ingresar 5 
//números en un arreglo y luego imprima los números en orden inverso.
reversa(){
    let num = document.getElementById("num").value
    let arrNum = num.split(",").map(Number)
    let resultadoHTML = "resp"
    let arrInv=[]
    if(arrNum.length === 5){
        for(let i = arrNum.length-1; i >= 0; i--){
             arrInv.push(arrNum[i])
             resultadoHTML = arrInv.join(", ")
            document.getElementById("resp").innerHTML = resultadoHTML
        }
    }
    else{
        document.getElementById("resp").innerHTML = "Ingrese 5 Numeros" + resultadoHTML
    }
}
//ejercicio 19
//Elementos mayores que un valor dado: Crea un programa que permita al usuario ingresar 8 números en un arreglo y luego pregunte al usuario por un valor específico, e imprima todos los números en el arreglo que sean mayores que ese valor.
mostrarMayores() {
    let numeros = document.getElementById('numeros').value.split(',').map(Number);
    if (numeros.length === 8) {
        let valorDado = +document.getElementById('valorDado').value;
        let resultado = [];
        for (var i = 0; i < numeros.length; i++) {
            if (numeros[i] > valorDado) {
                resultado.push(numeros[i]);
            }
        }
        document.getElementById('resultado').innerText = 'Números mayores que ' + valorDado + ': ' + resultado.join(', ');
    } else {
        document.getElementById('resultado').innerText = 'Por favor, ingrese exactamente 8 números.';
    }
}

limpiarResultado() { 
    document.getElementById('resultado').innerText = '';
    document.getElementById('numeros').value = '';
    document.getElementById('valorDado').value = '';
}

//ejercicio 20
//Encontrar duplicados: Crea un programa que permita al usuario ingresar 10 
//números en un arreglo y luego imprima todos los ceros.
cerosarr() {
    let num = document.getElementById("num").value;
    let arrNum = num.split(",").map(Number);
    let contadorCeros = 0;

    if (arrNum.length === 10) { // Verifica que hay exactamente 10 números
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i] === 0) {
                contadorCeros++; // Incrementa el contador de ceros
            }
        }
        if (contadorCeros > 0) {
            document.getElementById("resp").innerHTML = `Cantidad de ceros encontrados: ${contadorCeros}`;
        } else {
            document.getElementById("resp").innerHTML = "No se encontraron ceros.";
        }
    } else {
        document.getElementById("resp").innerHTML = "Por favor ingresa exactamente 10 números separados por comas.";
    }
}


//cadenas
//ejercicio 21
//Ingresar y mostrar cada carácter: Crea un programa que permita al usuario ingresar una cadena y luego imprima cada carácter de la cadena en una línea diferente.
mostrarCaracteres() {
    let cadena = document.getElementById('cadena').value;
    let resultado = '';
    for (var i = 0; i < cadena.length; i++) {
        resultado += cadena[i] + '<br>';
    }
    document.getElementById('resultado').innerHTML = resultado;
}

//ejercicio 22
//. Contar vocales: Crea un programa que permita al usuario ingresar una cadena y 
//luego cuente e imprima el número de vocales en la cadena.
contadorVocales() {
    let cad = document.getElementById("cad").value.toLowerCase(); // Convertir a minúsculas para considerar vocales mayúsculas y minúsculas
    let contadorVocales = 0;
    const vocales = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < cad.length; i++) {
        if (vocales.includes(cad[i])) {
            contadorVocales++; // Incrementa el contador de vocales
        }
    }

    if (contadorVocales > 0) {
        document.getElementById("resp").innerHTML = `Cantidad de vocales encontradas: ${contadorVocales}`;
    } else {
        document.getElementById("resp").innerHTML = "No se encontraron vocales en la cadena.";
    }
}
//ejercicio 23
//Mostrar caracteres en posiciones pares: Crea un programa que permita al usuario ingresar una cadena y luego imprima los caracteres en las posiciones pares de la cadena.
mostrarPares() {
    let cadena = document.getElementById('cadena').value;
    let resultado = '';
    for (let i = 1; i < cadena.length; i += 2) { // Comienza en 1 porque los índices pares en programación comienzan desde 0
        resultado += cadena[i] + '<br>';
    }
    document.getElementById('resultado').innerHTML = resultado;
}
//ejercicio 24
//Convertir a mayúsculas: Crea un programa que permita al usuario ingresar una 
//cadena y luego imprima cada carácter en mayúsculas.
mostrarMayusculas(){
    let cad = document.getElementById("cad").value
    let resultadoHTML
    for(let i = 0; cad.length; i++){
       let caracter = cad[i]
       let Mayus = caracter.toUpperCase()
       resultadoHTML +=  Mayus
       document.getElementById("resp").innerHTML = resultadoHTML
    }
}
//ejercicio 25
//Contar palabras: Crea un programa que permita al usuario ingresar una cadena y luego cuente e imprima el número de palabras en la cadena. (Una palabra se define como cualquier secuencia de caracteres separados por un espacio.)
contarPalabras() {
    let cadena = document.getElementById('cadena').value;
    let palabras = cadena.split(' '); // Separa la cadena en un array de palabras
    let numeroDePalabras = palabras.length;
    document.getElementById('resultado').innerHTML = 'Número de palabras: ' + numeroDePalabras;
}
//ejercicio 26
presentarPrimerCaracter() {
    let cad = document.getElementById("cad").value;
    let longitud = cad.length;
    let primerCaracter = cad.charAt(0); // También se puede usar cadena[0]
    let resp = "";

    // Construir el resultado para mostrar
    for (let i = 0; i < longitud; i++) {
        resp += primerCaracter + " ";
    }

    // Mostrar el resultado en el DOM
    document.getElementById("resp").textContent = resp;
}

//ejercicio 27
//Invertir la cadena: Crea un programa que permita al usuario ingresar una cadena y luego imprima la cadena invertida
invertirCadena() {
    let cadena = document.getElementById('cadena').value;
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    document.getElementById('resultado').innerHTML = 'Cadena invertida: ' + cadenaInvertida;
}
//ejercicio 28
//Frecuencia de caracteres: Crea un programa que permita al usuario ingresar 
//una cadena y luego cuente e imprima la frecuencia del ultimo carácter en la 
//cadena.
frecuencia(){
    let cad = document.getElementById("cad").value;
    if(cad.length === 0){
        document.getElementById("resp").textContent = "Por favor, ingrese una cadena.";
    }
    let ultimo = cad[cad.length-1]
    let frecuencia = 0
    for(let i=0; i < cad.length; i++){
        if(cad[i] === ultimo){
            frecuencia++
        }
    }
    document.getElementById("resp").innerHTML = `La frecuencia del ${ultimo} es ${frecuencia}`
}
//ejercicio 29
//Contar caracteres: Crea un programa que permita al usuario ingresar una cadena y luego la recorra para contar cuantos caracteres tiene la cadena.
contarCaracteres() {
    let cadena = document.getElementById('cadena').value;
    let numeroDeCaracteres = cadena.length;
    document.getElementById('resultado').innerHTML = 'Número de caracteres: ' + numeroDeCaracteres;
}

//ejercicio 30
eliminarEspacios() {
    let cad = document.getElementById("cad").value;
    let cadenaSinEspacios = '';
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] !== ' ') {
            cadenaSinEspacios += cad[i];
        }
    }

    document.getElementById("resp").innerHTML = `Cadena sin espacios: ${cadenaSinEspacios}`;
}
}

let ope = new tarea()

