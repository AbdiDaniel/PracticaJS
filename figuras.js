//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " 
+ ladoCuadrado 
+ "cm");

function perimetroCuadrado(lado) {
 return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
} 
areaCuadrado();

// Codigo del triangulo

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base
}

perimetroTriangulo();

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

areaTriangulo();

// Codigo del circulo

    //Diámetro 
        function diametroCirculo(radio){
            return radio * 2
        }

        radioCirculo();

    //PI
        const PI = Math.PI;

    //Circunferencia
        function perimetroCirculo(radio){
            const diametro = diametroCirculo(radio);
            return diametro * PI;
        }
        perimetroCirculo();
        
    //Área
        function areaCirculo(radio){
            return (radio * radio) * PI;
        }
        areaCirculo();
