
# Seletto - Testes de Automação com Cypress

## 💡 Visão Geral

Este repositório contém testes de automação para a landing page do projeto **Seletto**. Os testes são realizados utilizando a ferramenta **Cypress**, com foco na validação de funcionalidades essenciais da página, como envio de formulário de contato e navegação no carrossel.

## 🧪 Objetivo

Garantir que os fluxos principais da aplicação funcionem corretamente, validando aspectos funcionais e de usabilidade do site **Seletto**.

## 🧩 Testes

Os testes estão organizados da seguinte maneira:

### **Testes de Navegação (Navegacao.cy.js)**

Validam o comportamento das interações de navegação entre as seções do site. Exemplo de testes realizados:

- **Navegação entre as seções da página:** Valida que, ao clicar nas diferentes seções, a navegação ocorre corretamente.
- **Carrossel da Página Inicial:** Verifica se o carrossel da página inicial exibe corretamente o primeiro slide e permite a navegação.
- **Carrossel da Sessão de Imagens:** Valida que a seção de imagens exibe corretamente o carrossel e o slide ativo.

### **Testes de Formulário de Contato (Contato.cy.js)**

Validam o comportamento do formulário de contato na página de **contato**. Exemplo de testes realizados:

- **Envio com Sucesso:** Valida que, ao preencher os campos Nome, Email e Telefone corretamente, a mensagem "Sua mensagem foi enviada" é exibida.
- **Campos Obrigatórios:** Valida que, ao deixar campos obrigatórios em branco, o sistema exibe as mensagens de erro correspondentes.
- **Redirecionamento para WhatsApp e E-mail:** Valida os redirecionamentos corretos ao clicar nos ícones de WhatsApp e E-mail.

---

## 📋 Plano de Testes

### **Testes Realizados:**
1. **Envio com Sucesso:** Verifica o envio correto do formulário com todos os campos preenchidos.
2. **Campos Obrigatórios:** Verifica a resposta quando um ou mais campos obrigatórios estão vazios.
3. **Redirecionamento WhatsApp:** Valida se o ícone do WhatsApp redireciona corretamente para o WhatsApp Web/APP.
4. **Carrossel de Imagens:** Testa a navegação e visualização correta do carrossel na seção de imagens.

Veja mais detalhes no [Plano de Testes](./test_plan.md).

---

## 🔧 Configuração do Ambiente

Para rodar os testes, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seletto.git
   cd seletto
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Rode os testes:**
   ```bash
   npx cypress open
   ```

Isso abrirá o Cypress e permitirá que você execute os testes de forma interativa.

---

## 📝 Casos de Teste (BDD)

**CT01 - Envio com Sucesso:**
- **Dado** que o usuário está na área de contato
- **Quando** preenche os campos Nome, Email e Telefone com informações válidas e envia o formulário
- **Então** exibe a mensagem “Sua mensagem foi enviada”

**CT02 - Campo em Branco:**
- **Dado** que o usuário está na área de contato
- **Quando** submete o formulário sem preencher os campos obrigatórios
- **Então** exibe mensagens de erro apropriadas

**CT03 - Redirecionamento WhatsApp:**
- **Dado** que o usuário está na área de contato
- **Quando** clica no ícone de WhatsApp
- **Então** é redirecionado para o WhatsApp Web/APP

Consulte o arquivo [Plano de Testes](./test_plan.md) para mais detalhes.

---

## 📚 Documentação do Projeto

Este repositório contém as seguintes pastas e arquivos:

- **cypress/**: Contém todos os testes automatizados usando Cypress.
  - **tests/**: Testes de navegação e formulário de contato.
- **test_plan.md**: Documento de plano de testes.
- **README.md**: Este arquivo, com informações sobre o projeto e como rodar os testes.

---

## 🔗 Links Úteis

- [Documentação do Cypress](https://docs.cypress.io/)
- [Landing Page Seletto](https://www.sertenge.com.br/selettosalvadornorte/)

---

## 👨‍💻 Contribuições

Se você deseja contribuir para o projeto, por favor, siga o fluxo de **pull request** após garantir que todos os testes passem.

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações: `git checkout -b minha-branch`.
3. Faça as modificações necessárias e submeta os testes.
4. Crie um pull request com as mudanças.

---

## 📝 Considerações Finais

Os testes de automação são essenciais para garantir que o site Seletto funcione corretamente em diferentes cenários. Agradecemos sua contribuição!
