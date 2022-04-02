describe.skip('Submission Form Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
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

  it('Should click the Login button and see the text change', () => {
    cy.get('.login-button')
      .wait(1000)
      .click()
      .get('.login-button')
      .should('have.text', 'Logout')
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

  it('Should click the Submission Form link', () => {
    cy.get('.mobile-menu')
      .click()
      .wait(1000)
      .get('.mobile-link')
      .eq(1)
      .click()
      .url().should('eq', 'http://localhost:3000/form')
  });

  it('Should click the All Submissions link', () => {
    cy.get('.mobile-menu')
      .click()
      .wait(1000)
      .get('.mobile-link')
      .eq(2)
      .click()
      .url().should('eq', 'http://localhost:3000/submissions')
  });

  it('Shoud have a form', () => {
    cy.get('form')
      .should('exist')
  });

  it('Should have a default picture preview', () => {
    cy.get('.profile-picture-preview')
      .should('have.attr', 'src', '/static/media/profile-pic-logo.7cf3a9ef8966ce920739.png')
  });

  it('Should fill out the Name input field', () => {
    cy.get('input[name="name"]')
      .type('Cypress')
      .should('have.value', 'Cypress')
  });

  it('Should fill out the Email input field', () => {
    cy.get('input[name="email"]')
      .type('cypress@cypress.io')
      .should('have.value', 'cypress@cypress.io')
  });

  it('Should fill out the Genre input field', () => {
    cy.get('input[name="genre"]')
      .type('Testing')
      .should('have.value', 'Testing')
  });

  it('Should fill out the Song Title input field', () => {
    cy.get('input[name="song-title"]')
      .type('Testing')
      .should('have.value', 'Testing')
  });

  it('Should select a video file', () => {
    cy.get('input[name="video"]')
      .selectFile('cypress/fixtures/cypress-video.mov')
  });

  it('Should select an image file', () => {
    cy.get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
  });

  it('Should make a new submission', () => {
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/api/v1/submissions', { fixture: 'submission-response.json' }).as('submission-response')
    cy.get('input[name="name"]')
      .type('cypress')
      .get('input[name="email"]')
      .type('cypress@cypress.io')
      .get('input[name="genre"]')
      .type('cypress genre')
      .get('input[name="song-title"]')
      .type('cypress song title')
      .get('input[name="video"]')
      .selectFile('cypress/fixtures/cypress-video.mov')
      .get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
      .get('.submit-button')
      .click()
      .wait('@submission-response')
      .get('input[name="name"]')
      .type('Success!')
  });
});

describe('Submission Form Page User Flow - Sad Path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
  });

  it('Should not submit the form if all fields are empty', () => {
    cy.get('input:invalid')
      .should('have.length', 6)
  });

  it('Should not submit the form if the name field is empty', () => {
    cy.get('input[name="email"]')
      .type('cypress@cypress.io')
      .get('input[name="genre"]')
      .type('cypress genre')
      .get('input[name="song-title"]')
      .type('cypress song title')
      .get('input[name="video"]')
      .selectFile('cypress/fixtures/cypress-video.mov')
      .get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
      .get('input:invalid')
      .should('have.length', 1)
  });

  it('Should not submit the form if the email field is empty', () => {
    cy.get('input[name="name"]')
      .type('cypress')
      .get('input[name="genre"]')
      .type('cypress genre')
      .get('input[name="song-title"]')
      .type('cypress song title')
      .get('input[name="video"]')
      .selectFile('cypress/fixtures/cypress-video.mov')
      .get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
      .get('input:invalid')
      .should('have.length', 1)
  });

  it('Should not submit the form if the genre field is empty', () => {
    cy.get('input[name="name"]')
      .type('cypress')
      .get('input[name="email"]')
      .type('cypress@cypress.io')
      .get('input[name="song-title"]')
      .type('cypress song title')
      .get('input[name="video"]')
      .selectFile('cypress/fixtures/cypress-video.mov')
      .get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
      .get('input:invalid')
      .should('have.length', 1)
  });

  it('Should not submit the form if the song title field is empty', () => {
    cy.get('input[name="name"]')
      .type('cypress')
      .get('input[name="email"]')
      .type('cypress@cypress.io')
      .get('input[name="genre"]')
      .type('cypress genre')
      .get('input[name="video"]')
      .selectFile('cypress/fixtures/cypress-video.mov')
      .get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
      .get('input:invalid')
      .should('have.length', 1)
  });

  it('Should not submit the form if a video is not chosen', () => {
    cy.get('input[name="name"]')
      .type('cypress')
      .get('input[name="email"]')
      .type('cypress@cypress.io')
      .get('input[name="genre"]')
      .type('cypress genre')
      .get('input[name="song-title"]')
      .type('cypress song title')
      .get('input[name="profile-image"]')
      .selectFile('cypress/fixtures/cypress-image.png')
      .get('input:invalid')
      .should('have.length', 1)
  });
});