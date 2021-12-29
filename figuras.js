// //Código del cuadrado
// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " 
// + ladoCuadrado 
// + "cm");

// function perimetroCuadrado(lado) {
//  return lado * 4;
// }

// function areaCuadrado(lado) {
//     return lado * lado;
// } 
// areaCuadrado();

// // Codigo del triangulo

// function perimetroTriangulo (lado1, lado2, base){
//     return lado1 + lado2 + base
// }

// perimetroTriangulo();

// function areaTriangulo(base, altura){
//     return (base * altura) / 2
// }

// areaTriangulo();

// // Codigo del circulo

//     //Diámetro 
//         function diametroCirculo(radio){
//             return radio * 2
//         }

//         radioCirculo();

//     //PI
//         const PI = Math.PI;

//     //Circunferencia
//         function perimetroCirculo(radio){
//             const diametro = diametroCirculo(radio);
//             return diametro * PI;
//         }
//         perimetroCirculo();
        
//     //Área
//         function areaCirculo(radio){
//             return (radio * radio) * PI;
//         }
//         areaCirculo();

// //Primer reto
// //Triángulo Isósceles

// function isosceles (lado1, lado2, base){

//     //Validando si es isosceles
//     if (lado1 == lado2 && base != (lado1, lado2)){
//     //Calcular la altura
//     const alturaIsosceles = Math.sqrt((lado1**2) - (base**2 / 4));
//     console.log('La altura del triángulo es ' + alturaIsosceles);
//     } else {
//         console.log ('No es isosceles');
//     }
// }

// isosceles();

////////////////////////////////////////////////////////////////
// Procentajes

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickDescuentoProducto(){
    const inputPrice = document.getElementById('InputPrice'); 
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount'); 
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById('ResultP')
    resultP.innerText = " El precio con descuento es de $" + precioConDescuento;

}

