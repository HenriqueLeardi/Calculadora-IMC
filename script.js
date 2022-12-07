function calculoImc (event) {
    event.preventDefault();

    let resultado;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");

    if (imc < 17) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Cuidado você está muito abaixo do peso!"
    }else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Você está abaixo do peso!"
    }else if (imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Você está no peso ideal!"
    }else if (imc > 25 &&imc <= 29.9) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Cuidado você está levemente acima do peso!"
    }else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Cuidado você está em obesidade grau 1!"
    }else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Cuidado você está em obesidade grau 2 (severa)"
    }else if (imc >= 40) {
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + "<br> Você está em obesidade grau 3 (mórbida)"
    };

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}