# TRABALHO_PRATICO_JAVASCRIPT
Trabalho – Sistema de Prontuário Hospitalar (Frontend)

Objetivo
Desenvolver uma aplicação web simples para registro e consulta de pacientes em um sistema de prontuário hospitalar. O foco do trabalho está na manipulação de dados com JavaScript, estruturação com HTML e estilizar com CSS.
Descrição do Projeto
Você deve criar um sistema de prontuário hospitalar com as seguintes funcionalidades:
Cadastro de Paciente
Listagem de Pacientes
Visualização de Detalhes do Paciente
Edição de Prontuário
Busca por Nome

Todos os dados devem ser armazenados e manipulados no lado do cliente, utilizando arrays de objetos em JavaScript. Não será utilizado backend.
Requisitos Funcionais

1. Cadastro de Paciente
O formulário de cadastro deve conter os seguintes campos obrigatórios:
Campo Tipo de input HTML 
Nome completo  text
Data de nascimento date
CPF text
Sexo radio (M / F / Outro)
Sintomas textarea
Diagnóstico textarea
Ao clicar em "Cadastrar", os dados devem ser validados e adicionados à lista de pacientes.

2. Listagem de Pacientes
Os pacientes cadastrados devem ser exibidos em uma tabela ou cards.
Cada paciente listado deve apresentar, pelo menos, o nome e a idade (calculada a partir da data de nascimento), além de um botão "Ver Detalhes".

3. Visualização de Detalhes
O botão "Ver Detalhes" deve abrir uma seção ou modal com todas as informações cadastradas do paciente.

4. Edição de Prontuário
Deve ser possível editar todos os dados de um paciente, com exceção do CPF.
A atualização deve refletir no array de objetos de pacientes.

5. Busca por Nome
Um campo de busca deve permitir filtrar os pacientes cadastrados conforme o nome digitado pelo usuário, em tempo real.


Requisitos Técnicos
Utilizar HTML5, CSS3 e JavaScript puro (sem frameworks ou bibliotecas).
Manipular o DOM com JavaScript para inserir, listar, filtrar, editar e detalhar os dados.
Utilizar eventos como click, input, submit.
Utilizar array de objetos JavaScript como estrutura de dados.
Organizar o código em funções claras e bem nomeadas.
Aplicar validações nos formulários, incluindo:
Verificação de campos vazios.
Utilizar CSS para garantir uma interface visual clara, organizada e com responsividade (utilize Flexbox ou Grid).
