const imagem = document.getElementById("imagem");
var fec = document.getElementById("op");

onload = () => {
    imagem.src = "img/janFechada.png";
    fec.textContent = "Fechado";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janAberta.png";
    fec.textContent = "Aberto" ;
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janFechada.png";
    fec.textContent = "Fechado";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janQuebra.png";
    fec.textContent = "Quebrado";
});