describe('Submission Details User Flow', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'submission-details-response.json' }).as('submission-details-response')
    cy.visit('http://localhost:3000/submissions/1')
      .wait('@submission-details-response')
  });
  
  it('Should have a navigation bar', () => {
    cy.get('nav')
      .should('exist')
  });

  it('Should have a logo', () => {
    cy.get('img')
      .should('have.attr', 'src', '/static/media/Logo-Capstone.f486188199165f3fcb37.png')
  });

  it('Should have a title', () => {
    cy.get('h1')
      .should('have.text', 'Troubadour')
  });

  it('Should have a login button', () => {
    cy.get('.login-button')
      .should('exist')
      .should('have.text', 'Login')
  });

  it('Should have a hamburger menu', () => {
    cy.get('.mobile-nav-wrapper')
      .should('exist')
  });

  it('Should open the hamburger menu', () => {
    cy.get('.mobile-menu')
      .wait(1000)
      .click()
      .wait(1000)
      .get('.open')
      .should('exist')
  });

  it('Should have a list of links in the expanded menu', () => {
    cy.get('.mobile-menu')
      .click()
      .wait(1000)
      .get('.mobile-link')
      .should('have.length', 3)
      .get('.mobile-link')
      .first()
      .should('have.text', 'Home')
      .get('.mobile-link')
      .eq(1)
      .should('have.text', 'Submission Form')
      .get('.mobile-link')
      .eq(2)
      .should('have.text', 'All Submissions')
  });

  it('Should have a profile image', () => {
    cy.get('.details-picture')
      .should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png')
  });

  it('Should have a submission name', () => {
    cy.get('.details-card-container')
      .contains('Submission 1')
      .should('have.text', 'Submission 1')
  });

  it('Should have a genre', () => {
    cy.get('.details-card-container')
      .contains('Rock')
      .should('have.text', 'Rock')
  });

  it('Should have a song title', () => {
    cy.get('.details-card-container')
      .contains('Testing 1')
  });

  it('Should have a video', () => {
    cy.get('video')
      .should('exist')
  });
});