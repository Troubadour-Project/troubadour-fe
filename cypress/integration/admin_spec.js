describe('Admin Flow - Winner Selection', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('getSubmission')) {
        return req.reply({statusCode: 200, fixture:'submission-details-response.json'})
      } else if (req.body.query.includes('getAdmin')) {
        return req.reply({statusCode: 200, fixture: 'admin-response.json'})
      } else if (req.body.query.includes('updateWinner')) {
        return req.reply({statusCode: 200, fixture: 'update-winner-response.json'})
      } else if (req.body.query.includes('getWinner')) {
        return req.reply({statusCode: 200, fixture: 'get-winner-response.json'})
      }
    }).as('response')
      .visit('http://localhost:3000/submissions/1')
      .wait('@response')
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

  it('Should have a button on the submission details page to select a winner if logged in', () => {
    cy.get('.login-button')
      .wait(1000)
      .click({ force: true })
      .get('button')
      .contains('Select As Winner')
      .should('have.text', 'Select As Winner')
  });

  it('Should display a confirmation modal after the winner selection button is clicked', () => {
    cy.get('.login-button')
      .wait(1000)
      .click({ force: true })
      .get('button')
      .contains('Select As Winner')
      .click()
      .get('.modal-container')
      .should('exist')
  });

  it('Should close the modal', () => {
    cy.get('.login-button')
      .wait(1000)
      .click({ force: true })
      .get('button')
      .contains('Select As Winner')
      .click()
      .get('.modal-container')
      .should('exist')
      .get('.x-button')
      .click()
      .get('.modal-container')
      .should('not.exist')
  });

  it('Should close the modal by clicking the cancel button', () => {
    cy.get('.login-button')
      .wait(1000)
      .click({ force: true })
      .get('button')
      .contains('Select As Winner')
      .click()
      .get('.modal-container')
      .should('exist')
      .contains('Cancel')
      .click()
      .get('.modal-container')
      .should('not.exist')
  });

  it('Should select a winner', () => {
    cy.get('.login-button')
      .wait(1000)
      .click({ force: true })
      .get('button')
      .contains('Select As Winner')
      .click()
      .get('.modal-container')
      .should('exist')
      .contains('Select Winner')
      .click()
      .visit('http://localhost:3000/')
      .get('.winner-title')
      .should('have.text', 'Our Troubadour 2022 winner is:')
      .get('.winner-name')
      .should('have.text', 'Submission 1')
  });
});

describe('Admin Flow - Favoriting', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('getSubmissions')) {
        return req.reply({statusCode: 200, fixture:'all-submissions-false-response.json'})
      } else if (req.body.query.includes('getAdmin')) {
        return req.reply({statusCode: 200, fixture: 'admin-response.json'})
      } else if (req.body.query.includes('favoriteSubmissionAdmin')) {
        return req.reply({statusCode: 200, fixture: 'favorite-submission-response.json'})
      }
    }).as('response')
      .visit('http://localhost:3000/submissions')
      .wait('@response')
  });

  it('Should log in as an admin', () => {
    cy.get('.login-button')
      .click()
  });

  it('Should have star icons', () => {
    cy.get('.login-button')
      .wait(2000)
      .click()
      .get('.star-icon')
      .should('have.length', 2)
  });

  it('Should favorite a submission', () => {
    cy.get('.login-button')
      .click()
      .intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', (req) => {
        if (req.body.query.includes('getSubmissions')) {
          return req.reply({statusCode: 200, fixture: 'all-submissions-true-response.json'})
        } else if (req.body.query.includes('favoriteSubmissionAdmin')) {
          return req.reply({statusCode: 200, fixture: 'favorite-submission-response.json'})
        }
      }).as('modified-response');
    cy.get('.star-icon')
      .first()
      .click()
      .wait('@modified-response')
  });
});