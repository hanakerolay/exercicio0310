

const capacidadeMaxima = 30;
let alunosCadastrados = 0;
let alunos = []; 

function cadastrarAluno() {
    const nomeAluno = document.getElementById("alunoNome").value.trim();
    
     // Verificar se o campo nome está vazio
    if (nomeAluno == "") {
        alert("Insira o nome do aluno.");
        return;
    }

     // Utilizando o loop for para verificar e cadastrar alunos
    for (let i = alunosCadastrados; i < capacidadeMaxima; i++) {
        if (alunosCadastrados < capacidadeMaxima) {
            alunosCadastrados++;
            alunos.push(nomeAluno); // Adiciona o nome do aluno ao array
             atualizarListaAlunos(); // Chama a função para atualizar a exibição da lista
            let vagasRestantes = capacidadeMaxima - alunosCadastrados;

             // Atualizar mensagem de status da turma
            document.getElementById("status").innerText = 
                `Alunos cadastrados: ${alunosCadastrados}. Vagas restantes: ${vagasRestantes}.`;

             break; // Para não continuar o loop após cadastrar
        } 
    }

     // Verificar se não há mais vagas
    if (alunosCadastrados === capacidadeMaxima) {
        alert("Não há mais vagas disponíveis.");
    }

     // Limpar o campo de texto
    document.getElementById("alunoNome").value = "";
}

 // Função para atualizar a lista de alunos exibida
function atualizarListaAlunos() {
    const lista = document.getElementById("listaAlunos");
     lista.innerHTML = ""; // Limpar a lista anterior
    alunos.forEach(function(aluno) {
        const li = document.createElement("li");
        li.textContent = aluno;
         lista.appendChild(li); // Adicionar cada nome à lista de exibição
    });
}


let contadorId = 1; // Inicializa o ID em 1
const productForm = document.getElementById("productForm");
const productTableBody = document.getElementById("productTableBody");

productForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obtém os valores do formulário
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value).toFixed(2);
    const qtde = parseInt(document.getElementById("qtde").value);

    // Cria uma nova linha na tabela com o produto
    const novaLinha = document.createElement("tr");

    // Coluna ID
    const colunaId = document.createElement("td");
    colunaId.textContent = contadorId;
    novaLinha.appendChild(colunaId);

    // Coluna Nome
    const colunaNome = document.createElement("td");
    colunaNome.textContent = nome;
    novaLinha.appendChild(colunaNome);

    // Coluna Preço
    const colunaPreco = document.createElement("td");
    colunaPreco.textContent = `R$ ${preco}`;
    novaLinha.appendChild(colunaPreco);

    // Coluna Quantidade
    const colunaQtde = document.createElement("td");
    colunaQtde.textContent = qtde;
    novaLinha.appendChild(colunaQtde);

    // Adiciona a nova linha à tabela
    productTableBody.appendChild(novaLinha);

    // Incrementa o contador de ID
    contadorId++;

    // Limpa os campos do formulário após o cadastro
    productForm.reset();
});
