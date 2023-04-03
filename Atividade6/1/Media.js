var media;

var nota1;
var nota2;
var nota3;

var nomeAlu1;
var nomeAlu2;
var nomeAlu3;

nomeAlu1 = prompt("Qual o nome do aluno 1: ");
nota1 = parseFloat(prompt("Qual a nota desse aluno: "));

nomeAlu2 = prompt("Qual o nome do aluno 2: ");
nota2 = parseFloat(prompt("Qual a nota desse aluno: "));

nomeAlu3 = prompt("Qual o nome do aluno 3: ");
nota3 = parseFloat(prompt("Qual a nota desse aluno: "));

media = ((nota1 + nota2 + nota3) / 3);

document.write("Media dos alunos " + media.toFixed(2));


