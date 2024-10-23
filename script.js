const multiplicar = (num1, num2) => num1 * num2

let opcion = Number(prompt("----TIENDA----\n1 - Camiseta (valor $50)\n2 - Pantalón (valor $70)\n3 - Zapatos (valor $100)\n0 - Salir"))

while (opcion != 0) {
    switch (opcion) {
        case 1:
            let camisetas = Number(prompt("Cuantas desea comprar? "))
            if (!isNaN(camisetas)) {
                alert("El total es: " + multiplicar(camisetas, 50))
            }
            else {
                alert("Debe ingresar un número.")
            }
            break;
    
        case 2:
            let pantalones = Number(prompt("Cuantos desea comprar? "))
            if (!isNaN(pantalones)) {
                alert("El total es: " + multiplicar(pantalones, 70))
            }
            else {
                alert("Debe ingresar un número.")
            }
            break;
    
        case 3:
            let zapatos = Number(prompt("Cuantos desea comprar? "))
            if (!isNaN(zapatos)) {
                alert("El total es: " + multiplicar(zapatos, 100))
            }
            else {
                alert("Debe ingresar un número.")
            }
            break;
    
        default:
            alert("Ingrese una de las opciones disponibles.")
            break;
    }
    opcion = Number(prompt("----TIENDA----\n1 - Camiseta (valor $50)\n2 - Pantalón (valor $70)\n3 - Zapatos (valor $100)\n0 - Salir"))
}




