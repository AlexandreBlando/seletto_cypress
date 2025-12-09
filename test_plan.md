# 🧪 Plano de Testes  

**Projeto:** LP Seletto
**Responsável:** Blando Alexandre
**Data de Criação:** 21/11/2025  
**Versão:** 1.0  

---

## 🎯 Objetivo  
Garantir a conformidade da aplicação.


## ⚙️ Estratégia de Testes  

| Tipo | Objetivo | Ferramenta |
|------|-----------|-------------|
| **End-to-End (E2E)** | Garantir que o fluxo completo funcione na interface | Cypress |
| **Funcional Manual** | Identificar falhas de interface e feedbacks incorretos | Execução manual |

---

## 🧪 Categorias de Teste  

| Categoria | Objetivo |
|------------|-----------|
| **Unitário** | Validar lógica do requisito |
| **Integração** | Validar respostas e persistência |
| **Funcional** | Confirmar o comportamento esperado da aplicação |
| **Regressão** | Evitar quebra de fluxos principais |
| **Usabilidade** | Confirmar clareza e feedbacks adequados ao usuário |

---

### CT01 — Envio com Sucesso
**Dado que** O usuário está na area de contato
**Quando** ele preenche os campos Nome / Email / Telefone com informações validas e realizar o envio do formulário.
**Então** Exibir a mensagem “Envio com Sucesso”.

**Status:** ✅ Passou

---

### CT02 — Campo em branco  
**Dado que** O usuário está na area de contato 
**Quando** o formulario é submetido sem  preenche os campos Nome / Email / Telefone 
**Então** Exibir a mensagem “Informe o seu Email/Telefone/ nome e sobrenome”.

**Status:** ✅ Passou

---

### CT03 — Campo Nome não preenchido
**Dado que** O usuário está na area de contato  
**Quando** O formulario é submetido preenchendo somente o campo Email e Telefone
**Então** Exibe a mensagem “Informe o seu nome e sobrenome”.

**Status:** ✅ Passou

---

### CT04 — Campo E-mail não preenchido
**Dado que** O usuário está na area de contato  
**Quando** O formulario é submetido preenchendo somente o Nome e Telefone
**Então** Exibe a mensagem “Informe o seu E-mail”.

**Status:** ✅ Passou

---

### CT05 — Campo Telefone não preenchido 
**Dado que** O usuário está na area de contato  
**Quando** O formulario é submetido preenchendo somente o Nome e E-mail
**Então** Exibe a mensagem “Informe o seu telefone.

**Status:** ✅ Passou

---


### CT03 — Redirecionamento E-mail 
**Dado que** O usuário está na area de contato  
**Quando** ele clica no icone ou e-mail   
**Então** é redirecionado para o envio de e-mail da maquina

**Status:** ✅ Passou

---

### CT04 — Redirecionamento WhatsApp
**Dado que**  O usuário está na area de contato  
**Quando** ele clica no icone do whatsApp
**Então** é redirecionado para o WhatsApp Web/APP

**Status:** ✅ Passou


## 🔍 Casos de Teste (Extras - manual)




## 🧠 Abordagem de Teste  

| Abordagem | Descrição | Aplicação |
|------|------------|----------|
| **Caixa Preta** | Valida entradas e saídas da aplicação | Testes E2E e manuais |


## 🧮 Métricas de QA

| Métrica                      | Valor |
|-------------------------------|-------|
| Total de Casos de Teste       | 0    |
| Casos Executados              | 0    |
| Casos Aprovados               | 0    |
| Casos Reprovados              | 0     |
| Taxa de Sucesso (%)           | 100%   |
| Defeitos em Aberto            | 0     |
| Defeitos Corrigidos           | 0     |

---

## 📝 Considerações Finais  

- Status geral: 
    - Todos os casos propostos (unitários e E2E) passaram nesta rodada de testes.



