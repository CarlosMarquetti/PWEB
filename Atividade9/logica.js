var aNumeros =  new Array();

for(i = 0; i < 3; i++){
    aNumeros[i] = parseInt(prompt("Digite o número: " + [i + 1]));
}

function maiorNumero(aNumeros) {
    var arrayNumeros = aNumeros;
    return Math.max.apply(null, arrayNumeros);
}

function ordemCrescente(aNumeros) {
    var arrayNumeros = aNumeros;
    arrayNumeros.sort(function(a, b) {
        return a - b;
    });
    return arrayNumeros;
}

alert(maiorNumero(aNumeros));
alert(ordemCrescente(aNumeros));