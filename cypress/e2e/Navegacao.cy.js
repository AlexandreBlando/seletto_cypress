describe('Validação de Navegação da Pagina', () => {

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

    it('Carrosel Pagina Inicial', () => {

        cy.get('.splide__list')
            .should('be.visible')

        // 2) Verifica se há pelo menos 2 slides
        cy.get('.splide__slide').its('length').should('be.gte', 2)

        // 3) Verifica slide inicial ativo (dependendo da classe usada)
        cy.get('.splide__slide.is-active')
            .should('exist')
            .as('activeSlide1')




    })

    it.only('Carrosel sessão Imagem', () => {

cy.navegation('imagens')

//Valida que Existe na Pagina
cy.get('#splide02-list').should('exist');

//is-active é uma propia função da classe Splide
cy.get('#splide02-list')
  .find('.splide__slide.is-active')
  .should('be.visible')



        //cy.get('.splide02-list')
    })


})