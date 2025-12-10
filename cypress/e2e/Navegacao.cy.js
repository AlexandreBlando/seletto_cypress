describe('Navegação', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Validação de visualização após clicar nas sessoes', () => {

        cy.navegation('infraestrutura')
        cy.navegation('imagens')
        cy.navegation('apartamentos')
        cy.navegation('obra')
        cy.navegation('contato')

    })

    it.only('Carrosel', () => {

        cy.get('.splide__list')
            .should('be.visible')

    // 2) Verifica se há pelo menos 2 slides
    cy.get('.splide__slide').its('length').should('be.gte', 2)

    // 3) Verifica slide inicial ativo (dependendo da classe usada)
    cy.get('.splide__slide.is-active')
      .should('exist')
      .as('activeSlide1')

    // 4) Clica no botão “próximo” (seta) e verifica que o slide ativo muda
    cy.get('.splide__arrow--next').click()

    cy.get('@activeSlide1').should('not.have.class', 'is-active')
    cy.get('.splide__slide.is-active').should('exist')


    })
})