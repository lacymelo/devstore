describe('search products', () => {
    // before(() => {
    // })

    it('testando busca por produtos', () => {
        cy.visit('/')

        cy.searchByQuery('moletom')

        cy.location('pathname').should('include', '/search')
        cy.location('search').should('include', 'q=moletom')

        cy.get('a[href^="/product"]').should('exist')
    })

    it('acessando a página de busca sem nenhum parâmetro', () => {
        cy.on('uncaught:exception', () => {
            return false
        })

        cy.visit('/search')

        cy.location('pathname').should('includes', '/')
    })
})