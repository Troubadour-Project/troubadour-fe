describe('Route Error Handling', () => {
  it('Should handle incorrect urls on landing page', () => {
    cy.visit('http://localhost:3000/test')
      .get('p')
      .should('have.text', 'Looks like that page does not exist.')
      .get('a')
      .should('have.attr', 'href', '/')
      .get('.home-button')
      .should('have.text', 'Back To Home Page')
  })
  
  it('Should handle incorrect urls on submission details page', () => {
    cy.visit('http://localhost:3000/submissions/test')
      .get('p')
      .should('have.text', 'Looks like that page does not exist.')
      .get('a')
      .should('have.attr', 'href', '/')
      .get('.home-button')
      .should('have.text', 'Back To Home Page')

    cy.visit('http://localhost:3000/test/1')
      .get('p')
      .should('have.text', 'Looks like that page does not exist.')
      .get('a')
      .should('have.attr', 'href', '/')
      .get('.home-button')
      .should('have.text', 'Back To Home Page')
  })

  it.only('Should handle 400 errors', () => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('getAdmin')) {
        return req.reply({ graphQLErrors: {statusCode: 400 }})
      } else if (req.body.query.includes('getWinner')) {
        return req.reply({ graphQLErrors: { statusCode: 400 } })
      }
    }).as('Error')
      
    cy.visit('http://localhost:3000/')
      .wait('@Error')
      .get('p')
  })
})