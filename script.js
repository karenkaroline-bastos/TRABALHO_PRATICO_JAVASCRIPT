// Array para armazenar os pacientes
let pessoasCadastradas = [];

// Evento do botão Cadastrar
document.getElementById("cadastrar").addEventListener("click", (event) => {
    event.preventDefault();

    // Captura dos dados
    let nome = document.getElementById("nome").value.trim();
    let dataNasc = document.getElementById("data").value;
    let cpf = document.getElementById("cpf").value.trim();
    let generoSelecionado = document.querySelector('input[name="sexo"]:checked');
    let genero = generoSelecionado ? generoSelecionado.value : "";
    let sintomas = document.getElementById("sintomas").value.trim();
    let diagnostico = document.getElementById("diagnostico").value.trim();

    // Validação dos campos
    if (!nome || !dataNasc || !cpf || !genero || !sintomas || !diagnostico) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Verifica se CPF já está cadastrado
    const cpfExiste = pessoasCadastradas.some(p => p.cpf === cpf);
    if (cpfExiste) {
        alert("CPF já cadastrado!");
        return;
    }

    // Cria objeto paciente
    const registro = {
        nome,
        dataNasc,
        cpf,
        genero,
        sintomas,
        diagnostico
    };

    // Adiciona ao array
    pessoasCadastradas.push(registro);

    // Atualiza tabela
    exibirTabela();

    // Limpa formulário
    document.getElementById("formulario").reset();
});

// Função para calcular idade
function calcularIdade(dataNasc) {
    const hoje = new Date();
    const nascimento = new Date(dataNasc);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Evento do botão Exibir Tabela
document.getElementById("botaoTabela").addEventListener("click", exibirTabela);

// Função para exibir tabela
function exibirTabela() {
    const tabela = document.getElementById("tabelaCadastro");

    tabela.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Editar</th>
            <th>Detalhes</th>
        </tr>
    `;

    pessoasCadastradas.forEach((pessoa, index) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${pessoa.nome}</td>
            <td>${calcularIdade(pessoa.dataNasc)} anos</td>
            <td>${pessoa.genero}</td>
            <td><button onclick="editarCadastro(${index})">Editar</button></td>
            <td><button onclick="exibirDetalhes(${index})">Detalhes</button></td>
        `;

        tabela.appendChild(linha);
    });
}

// Função para editar cadastro
function editarCadastro(index) {
    const pessoa = pessoasCadastradas[index];

    document.getElementById("nome").value = pessoa.nome;
    document.getElementById("data").value = pessoa.dataNasc;
    document.getElementById("cpf").value = pessoa.cpf;
    document.querySelector(`input[name="sexo"][value="${pessoa.genero}"]`).checked = true;
    document.getElementById("sintomas").value = pessoa.sintomas;
    document.getElementById("diagnostico").value = pessoa.diagnostico;

    // Remove o antigo
    pessoasCadastradas.splice(index, 1);

    alert(`Edição do cadastro de ${pessoa.nome}. Faça as alterações e clique em Cadastrar para salvar.`);
}

// Função para exibir detalhes
function exibirDetalhes(index) {
    const pessoa = pessoasCadastradas[index];

    alert(
        `Dados do Paciente:\n\n` +
        `Nome: ${pessoa.nome}\n` +
        `Idade: ${calcularIdade(pessoa.dataNasc)} anos\n` +
        `CPF: ${pessoa.cpf}\n` +
        `Gênero: ${pessoa.genero}\n` +
        `Sintomas: ${pessoa.sintomas}\n` +
        `Diagnóstico: ${pessoa.diagnostico}`
    );
}
