function compararCondiciones() {

    let numero = document.querySelector("#numero").value;
    let resultado = "";

    if (numero < 576) {
        resultado = "XS";
    }
    else if (numero < 768) {
        resultado = "SM";
    }
    else if (numero < 962) {
        resultado = "MD";
    }
    else {
        resultado = "XL";
    }

    document.querySelector("#resultado").innerHTML =
        "El resultado es: " + resultado;
}