describe('Error Handling', () => {
  it('Should handle 404 error on landing page', () => {
    cy.visit('http://localhost:3000/test')
      .get('p')
      .should('have.text', 'Looks like that page does not exist.')
      .get('a')
      .should('have.attr', 'href', '/')
      .get('.home-button')
      .should('have.text', 'Back To Home Page')
  });
  
  it('Should handle 404 error on submission details page', () => {
    cy.visit('http://localhost:3000/submissions/test')
      .get('p')
      .should('have.text', 'Sorry, we couldn\'t find that. Please try again.')
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
  });
});