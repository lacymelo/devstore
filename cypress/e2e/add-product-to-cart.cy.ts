describe('add product to cart', () => {
  it('o usuário deve visitar um produto e poder adicionar ao carrinho', () => {
    cy.visit('http://localhost:3000')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('o usuário pode buscar por um produto', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name=q]').type('moletom').parent('form').submit()
  })
})