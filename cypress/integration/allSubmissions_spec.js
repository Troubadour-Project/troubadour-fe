describe('All Submissions Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'all-submissions-response.json' }).as('submissions-response')
      .visit('http://localhost:3000/submissions')
      .wait('@submissions-response')
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

  it('Should display submissions', () => {
    cy.get('.card')
      .should('have.length', 2)
  });

  it('Should display an image on the card', () => {
    cy.get('.profile-img')
      .first()
      .should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png')
  })

  it('Should display a name on the card', () => {
    cy.get('.card')
      .first()
      .contains('Submission 1')
  });

  it('Should display a song title on the card', () => {
    cy.get('.card')
      .first()
      .contains('Testing 1')
  });

  it('Should see additional submission details', () => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'submission-details-response.json' }).as('submission-details-response')
    cy.visit('http://localhost:3000/submissions/1')
      .get('.details-picture')
      .should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png')
      .get('.details-card-container')
      .contains('Submission 1')
      .should('have.text', 'Submission 1')
      .get('.details-card-container')
      .contains('Testing 1')
      .should('have.text', 'Testing 1')
      .get('.details-card-container')
      .contains('Rock')
      .should('have.text', 'Rock')
      .get('video')
      .should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Ginda_Bestari_-_overdrive_on_electric_guitar_%28Lovepedal_Kalamazoo%2C_Providence_Stampede_OD%29.webm')
  });
});
