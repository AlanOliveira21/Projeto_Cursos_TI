const inscricao = document.getElementById("btn-inscricao");
const mensagem = document.getElementById("mensagem-inscricao");
const fechar = document.getElementById("btn-voltar");
const mostrarConteudo = document.getElementById("btn-conteudo");
const conteudo = document.getElementById("conteudo-frontend");

const lista = document.createElement("ul");
const itens = ["HTML", "CSS", "JavaScript"];

itens.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
});

if (!conteudo) {
    console.error("Elemento 'conteudo-frontend' não encontrado no DOM.");
} else {
    conteudo.appendChild(lista);
}

if (!mostrarConteudo) {
    console.error("Elemento 'btn-conteudo' não encontrado no DOM.");
} else {   
    mostrarConteudo.addEventListener("click", function() {
        conteudo.classList.toggle("mostrar");

        if (conteudo.classList.contains("mostrar")) {
            mostrarConteudo.textContent = "Ocultar Conteúdo";
        } else {
        mostrarConteudo.textContent = "Ver Conteúdo";
    }  

    });
}

if (!fechar) {
    console.error("Elemento 'btn-voltar' não encontrado no DOM.");
} else {
    fechar.addEventListener("click", function() {
        mensagem.classList.toggle("mostrar");
        mensagem.textContent = "Inscrição realizada com sucesso!";
    });
}

if (!inscricao) {
    console.error("Elemento 'btn-inscricao' não encontrado no DOM.");
} else {
    inscricao.addEventListener("click", function(evento) {
        evento.preventDefault();
        mensagem.classList.add("mostrar");
        mensagem.textContent = "Inscrição realizada com sucesso!";
    });
}


/*cursos.html------------------------------------------------------------*/

const cursos = [
    {
        nome: "HTML e CSS",
        nivel: "Iniciante",
        preco: 100,
        conteudo: ["HTML", "CSS"]
    },
    {
        nome: "JavaScript",
        nivel: "Intermediário",
        preco: 150,
        conteudo: ["Variáveis", "Funções", "DOM", "Arrays"]
    },
    {
        nome: "Node.js",
        nivel: "Avançado",
        preco: 200,
        conteudo: ["Express", "APIs", "Middleware"]
    }
];

const listarCursos = document.getElementById("listar-cursos");
const filtroNivel = document.getElementById("filtro-nivel");

filtroNivel.addEventListener("change", function() {
    const nivelSelecionado = filtroNivel.value;
    if (nivelSelecionado === "todos") {
        mostrarCursos(cursos);
    } else {
        const cursosFiltrados = cursos.filter(curso => curso.nivel === nivelSelecionado);
        mostrarCursos(cursosFiltrados);
    }
});

if (!listarCursos) {
    console.error("Elemento 'listar-cursos' não encontrado no DOM.");
}else { 
    mostrarCursos(cursos);
}

function mostrarCursos(listaCursos) {
    listarCursos.innerHTML = "";

    listaCursos.forEach(curso => {
    const card = document.createElement("div");
    const conteudo = document.createElement("div");
    const nome = document.createElement("h3");
    const nivel = document.createElement("p");
    const preco = document.createElement("p");
    const botao = document.createElement("button");
    const detalhes = document.createElement("div");
    const listaConteudo = document.createElement("ul");

    curso.conteudo.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaConteudo.appendChild(li);
    });
    detalhes.appendChild(listaConteudo);
    detalhes.classList.add("detalhes");

    botao.addEventListener("click", function() {
        detalhes.classList.toggle("mostrar");

        if (detalhes.classList.contains("mostrar")) {
            botao.textContent = "Ocultar Conteúdo";
        } else {
            botao.textContent = "Ver curso";
        }
    });
    
    nome.textContent = curso.nome;
    nivel.textContent = curso.nivel;
    preco.textContent = `R$ ${curso.preco.toFixed(2)}`;
    botao.textContent = "Ver curso";

    conteudo.appendChild(nome);
    conteudo.appendChild(nivel);
    conteudo.appendChild(preco);
    conteudo.appendChild(botao);
    conteudo.appendChild(detalhes);
    card.appendChild(conteudo);
    listarCursos.appendChild(card);
});
}



