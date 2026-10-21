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
const buscaCurso = document.getElementById("busca-curso");
const ordenarPreco = document.getElementById("ordenar-preco");
const quantidadeCursos = document.getElementById("quantidade-cursos");

function filtrarCursos(cursos) {
    const nivelSelecionado = filtroNivel.value;
    const termoBusca = buscaCurso.value.trim().toLowerCase();
    const criterioOrdenacao = ordenarPreco.value;

    let cursosOrdenados = [...cursos];
    if (criterioOrdenacao === "menor") {
        cursosOrdenados.sort((a, b) => a.preco - b.preco);
    } else if (criterioOrdenacao === "maior") {
        cursosOrdenados.sort((a, b) => b.preco - a.preco);
    }

    const cursosFiltrados = cursosOrdenados.filter(curso => 
    (nivelSelecionado === "todos" || curso.nivel === nivelSelecionado) 
    &&
    (curso.nome.toLowerCase().includes(termoBusca))
    );

    mostrarCursos(cursosFiltrados);
}

ordenarPreco.addEventListener("change", function() {
    filtrarCursos(cursos);
});

buscaCurso.addEventListener("input", function() {
    filtrarCursos(cursos);
});

filtroNivel.addEventListener("change", function() {
    filtrarCursos(cursos);
});

if (!listarCursos) {
    console.error("Elemento 'listar-cursos' não encontrado no DOM.");
}else { 
    mostrarCursos(cursos);
}

function mostrarCursos(listaCursos) {
    const total = listaCursos.length;
    const quantidadeCursos = document.getElementById("quantidade-cursos");

    if (total > 1) {
        quantidadeCursos.textContent = `${total} cursos encontrados`;
    } else if (total === 1) {
        quantidadeCursos.textContent = `${total} curso encontrado` ;
    }else {
        quantidadeCursos.textContent = "Nenhum curso encontrado";
    }

    listarCursos.innerHTML = "";

    const listaVazia = listaCursos.length === 0;
    if (listaVazia) {
        const mensagemVazia = document.createElement("p");
        mensagemVazia.textContent = "Nenhum curso encontrado.";
        mensagemVazia.classList.add("mensagem-vazia");
        listarCursos.appendChild(mensagemVazia);
        return;
    }

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
