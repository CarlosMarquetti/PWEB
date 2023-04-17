// Inicializando variáveis
let somaIdades = 0;
let idadeMaisVelha = 0;
let idadeMaisNova = 100;
let quantidadePessimo = 0;
let quantidadeOtimoBom = 0;
let quantidadeHomens = 0;
let quantidadeMulheres = 0;

// Loop para coletar dados dos participantes
for (let i = 1; i <= 45; i++) {
  let idade = parseInt(prompt("Digite a idade da pessoa " + i));
  let sexo = prompt("Digite o sexo da pessoa " + i + " (M ou F)").toUpperCase();
  let opiniao = parseInt(prompt("Digite a opinião da pessoa " + i + " (1=Péssimo, 2=Regular, 3=Bom, 4=Ótimo)"));

  // Adicionando idade à soma das idades
  somaIdades += idade;

  // Verificando a idade mais velha e a mais nova
  if (idade > idadeMaisVelha) {
    idadeMaisVelha = idade;
  }
  if (idade < idadeMaisNova) {
    idadeMaisNova = idade;
  }

  // Contando a quantidade de pessoas que responderam Péssimo
  if (opiniao === 1) {
    quantidadePessimo++;
  }

  // Contando a quantidade de pessoas que responderam Ótimo ou Bom
  if (opiniao === 3 || opiniao === 4) {
    quantidadeOtimoBom++;
  }

  // Contando a quantidade de homens e mulheres que responderam ao questionário
  if (sexo === "M") {
    quantidadeHomens++;
  } else if (sexo === "F") {
    quantidadeMulheres++;
  }
}

// Calculando a média das idades
let mediaIdades = somaIdades / 45;

// Calculando a porcentagem de pessoas que responderam Ótimo ou Bom
let porcentagemOtimoBom = (quantidadeOtimoBom / 45) * 100;

// Exibindo os resultados
alert(`
Média das idades: ${mediaIdades}
Idade da pessoa mais velha: ${idadeMaisVelha}
Idade da pessoa mais nova: ${idadeMaisNova}
Quantidade de pessoas que responderam Péssimo: ${quantidadePessimo}
Porcentagem de pessoas que responderam Ótimo ou Bom: ${porcentagemOtimoBom}%
Número de homens que responderam ao questionário: ${quantidadeHomens}
Número de mulheres que responderam ao questionário: ${quantidadeMulheres}
`);


// console.log("Média das idades: " + mediaIdades);
// console.log("Idade da pessoa mais velha: " + idadeMaisVelha);
// console.log("Idade da pessoa mais nova: " + idadeMaisNova);
// console.log("Quantidade de pessoas que responderam Péssimo: " + quantidadePessimo);
// console.log("Porcentagem de pessoas que responderam Ótimo ou Bom: " + porcentagemOtimoBom + "%");
// console.log("Número de homens que responderam ao questionário: " + quantidadeHomens);
// console.log("Número de mulheres que responderam ao questionário: " + quantidadeMulheres);