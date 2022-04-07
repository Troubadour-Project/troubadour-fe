describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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

  it('Should have a background image', () => {
    cy.get('.landing-page-container')
      .should('have.css', 'background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://localhost:3000/static/media/hero-image.0917e5513296b4cecb1f.jpeg")')
  });

  it('Should display a welcome message', () => {
    cy.get('.welcome-message-header')
      .should('have.text', 'Welcome to the Troubadour Music Contest!')
      .get('.greeting-message')
        .contains('We will accept entries for the 2023 Troubadour Music Contest beginning April 1st, 2022. Contestants may submit an original song. We will post submission details later on.')
  });

  it('Should have a link to the submission form', () => {
    cy.get('.hero-button')
      .should('have.text', 'Sign Up Form')
      .click()
      .wait(1000)
      .url().should('eq', 'http://localhost:3000/form')
  });
});