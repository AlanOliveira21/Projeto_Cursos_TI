const inscricao = document.getElementById("btn-inscricao");
const mensagem = document.getElementById("mensagem-inscricao");
const fechar = document.getElementById("btn-voltar");
const mostrarConteudo = document.getElementById("btn-conteudo");
const conteudo = document.getElementById("conteudo-frontend");

fechar.addEventListener("click", function() {
    mensagem.classList.toggle("mostrar");
    mensagem.textContent = "Inscrição realizada com sucesso!";
});

mostrarConteudo.addEventListener("click", function() {
    conteudo.classList.toggle("mostrar");
});

inscricao.addEventListener("click", function(evento) {
    evento.preventDefault();
    mensagem.classList.add("mostrar");
    mensagem.textContent = "Inscrição realizada com sucesso!";
});