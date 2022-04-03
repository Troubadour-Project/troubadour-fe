describe('All Submissions Page User Flow', () => {
  beforeEach(() => {
    // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'all-submissions-response.json' }).as('submissions-response')
    cy.visit('http://localhost:3000/submissions')
      // .wait(10000)
  });
  
  it('Should have a navigation bar', () => {
    // cy.wait('@submissions-response')
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

  // it('Should click the Login button and see the text change', () => {
  //   cy.get('.login-button')
  //     .wait(1000)
  //     .click()
  //     .wait(1000)
  //     .get('.login-button')
  //     .should('have.text', 'Logout')
  // });

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
      .first()
      .should('exist')
  });

  // it.only('Should display an image on the card', () => {
  //   cy.get('.profile-img')
  //     .first()
  //     .should('have.attr', 'src', 'https://troubadour-capstone-prod.s3.us-west-1.amazonaws.com/qyt0pc4fbjcv9ukjh763c353mxtf?response-content-disposition=inline%3B%20filename%3D%22hero-image.jpeg%22%3B%20filename%2A%3DUTF-8%27%27hero-image.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASIRQYXQ4ECJNJDGC%2F20220403%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220403T034724Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2c12d0d34e6c3e81515b1731bc4af1151922a13792235900b083964fb4718a72')
  // })

  it('Should display a name on the card', () => {
    cy.get('.card')
      .first()
      .contains('customer1')
  });

  it('Should display a song title on the card', () => {
    cy.get('.card')
      .first()
      .contains('asdf')
  });
});