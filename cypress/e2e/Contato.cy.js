describe('template spec', () => {


  beforeEach(() => {
    cy.start()
  })

  it('Caso Perfeito', () => {

    //cy.visit('https://www.sertenge.com.br/selettosalvadornorte/')


    cy.get('#ctt-name').type('Teste Teste')
    cy.get('#ctt-mail').type('Teste@hotmail.com')
    cy.get('#ctt-fone').type('71981489637')
    cy.contains('button', 'Enviar').click()

    //cy.contains('Sua mensagem foi enviada').should('be.visible')

    cy.get('#contato')
      .contains('span.success', 'Sua mensagem foi enviada.')
      .should('be.visible')




  })

  context('Campos Obrigatórios', () => {

    it('Todos os Campos Obrigatorios', () => {
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

    it('Nome Obrigatorio', () => {


      cy.get('#ctt-mail').type('Teste@hotmail.com')
      cy.get('#ctt-fone').type('71981489637')

      cy.contains('button', 'Enviar').click()

      cy.get('#ctt-name')
        //.parent()
        .siblings('.message')
        .should('be.visible')
        .and('contain', 'Informe o seu nome e sobrenome.')

      cy.contains('button', 'Enviar').click()


    })


    it('E-mail Obrigatorio', () => {

      cy.get('#ctt-name').type('Teste Teste')
      cy.get('#ctt-fone').type('71981489637')

      cy.contains('button', 'Enviar').click()


      cy.get('#ctt-mail')
        .next('.message')
        .should('be.visible')
        .and('contain', 'Informe o seu e-mail.')

    })

    it('Telefone Obrigatorio', () => {

      cy.get('#ctt-mail').type('Teste@hotmail.com')
      cy.get('#ctt-name').type('Teste Teste')

      cy.contains('button', 'Enviar').click()


      cy.get('#ctt-fone')
        .next('.message')
        .should('be.visible')
        .and('contain', 'Informe o seu telefone.')


    })

  })

  it('Validar Contato Whatsapp', () => {

    cy.contains('a', '71 99969-1478')
      .should('have.attr', 'href', 'https://wa.me/5571999691478')
      .and('have.attr', 'target', '_blank')
  })

  it('Validar Contato Telefone', () => {

    cy.contains('a', '71 3461-4444')
      .should('have.attr', 'href', 'tel:7134614444')
      .and('have.attr', 'target', '_blank')

  })

})