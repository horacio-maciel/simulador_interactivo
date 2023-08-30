//Defini una función para calcular el resultado de la operación

function calcular(num1, operador, num2) {
    num1 = parseFloat(num1); // Convertimos el primer número a decimal
    num2 = parseFloat(num2); // Convertimos el segundo número a decimal

    // Utilice un switch para manejar diferentes operadores

    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Operación inválida';
    }
}

// Use un bucle while para permitir múltiples cálculos

while (true) {

    // Solicite al usuario ingresar el primer número (o "salir" para finalizar)

    const num1 = prompt('Ingresa el primer número (o "salir" para finalizar):');

    // Si el usuario ingresa "salir", finalizamos el bucle

    if (num1.toLowerCase() === 'salir') {
        console.log('Calculadora finalizada.');
        console.log('gracias por utilizar nuestra calculadora interactiva.');
        break;
    }

    // Solicite al usuario ingresar el operador

    const operador = prompt('Ingresa el operador (+, -, *, /):');

    // Solicite al usuario ingresar el segundo número

    const num2 = prompt('Ingresa el segundo número:');

    // Calculamos el resultado utilizando la función calcular

    const result = calcular(num1, operador, num2);

    // Mostramos el resultado en la consola

    console.log(`Resultado: ${result}`);
}


