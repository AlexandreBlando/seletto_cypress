describe('template spec', () => {


  beforeEach(() => {
    cy.start()
  })

  it.only('Caso Perfeito', () => {

    //cy.visit('https://www.sertenge.com.br/selettosalvadornorte/')
cy.get('#contato')
  .contains('span.success', 'Sua mensagem foi enviada.')
  .should('be.visible')



    cy.get('#ctt-name').type('Teste Teste')
    cy.get('#ctt-mail').type('Teste@hotmail.com')
    cy.get('#ctt-fone').type('71981489637')
    cy.contains('button', 'Enviar').click()

    //cy.contains('Sua mensagem foi enviada').should('be.visible')

cy.get('#contato')
  .contains('span.success', 'Sua mensagem foi enviada.')
  .should('be.visible')




  })
  it('Campo Obrigatorio', () => {
    cy.contains('button', 'Enviar').click()

cy.get('#ctt-mail')
  .next('.message')
  .should('be.visible')
  .and('contain', 'Informe o seu e-mail.')


    cy.get('#ctt-name')
    //.parent()
    .siblings('.message')
    .should('be.visible')
    .and('contain', 'Informe o seu nome e sobrenome.')

    cy.get('#ctt-mail')
    .parent()
    .find('.message')
    .should('be.visible')
    .and('contain', 'Informe o seu e-mail')

cy.get('#ctt-fone')
  .parent()               // sobe para o <div class="group">
  .find('.message')       // pega o span.message dentro dele
  .should('be.visible')
  .and('contain', 'Informe o seu telefone.')

  })

})
