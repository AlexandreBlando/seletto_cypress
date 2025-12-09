// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('start', ()=>{
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8080/seletto/')

})


Cypress.Commands.add('navegation', (section)=>{
    //Click na sessão que deseja
    //cy.contains('a', section).click()
    cy.contains('a', section.charAt(0).toUpperCase() + section.slice(1)).click()
      // Valida se a seção destino ficou visível
    cy.get(`#${section}`)
    .should('be.visible')
})



/*

Cypress.Commands.add('preencherContato', (dados = {}) => {
  const { nome, email, telefone } = dados;

  if (nome) cy.get('#ctt-name').type(nome);
  if (email) cy.get('#ctt-mail').type(email);
  if (telefone) cy.get('#ctt-fone').type(telefone);

  cy.contains('button', 'Enviar').click();
});


Todos os Campos:

cy.preencherContato({
  nome: 'João Silva',
  email: 'joao@teste.com',
  telefone: '71999998888'
});
    

Todos os campos
cy.preencherContato();

Somente telefone
cy.preencherContato({
  telefone: '71911112222'
});

*/

