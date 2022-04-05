describe('Admin Flow', () => {
  beforeEach(() => {
    // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'submission-details-response.json' }).as('submission-details-response')
    // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', req => console.log(req.body.query.includes('getSubmission')))
    cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', (req) => {
      if (req.body.query.includes('getSubmission')) {
        console.log('getSubmission >>>>>')
        console.log(req.body.query.includes('getSubmission'))
        console.log({fixture: 'submission-details-response.json'})
        return req.reply({statusCode: 200, fixture:'submission-details-response.json'})
      } else if (req.body.query.includes('getAdmin')) {
        console.log('getAdmin >>>>>')
        console.log(req.body.query.includes('getAdmin'))
        return req.reply({statusCode: 200, fixture: 'admin-response.json'})
      } else if (req.body.query.includes('updateWinner')) {
        return req.reply({statusCode: 200, fixture: 'update-winner-response.json'})
      } else if (req.body.query.includes('getWinner')) {
        return req.reply({statusCode: 200, fixture: 'get-winner-response.json'})
      }
    }).as('response')
  //   cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', req => {
  //     const { body } = req
  //     console.log(req.reply)
  //     console.log(req.reply({ statusCode: 200, fixture: 'admin-response.json' }))
  //   }).as('response')
    cy.visit('http://localhost:3000/submissions/1')
      .wait('@response')
  });

  it('should be true', () => {
    expect(true).to.equal(true)
  })

  // it('Should have a navigation bar', () => {
  //   cy.get('nav')
  //     .should('exist')
  // });

  // it('Should have a logo', () => {
  //   cy.get('img')
  //     .should('have.attr', 'src', '/static/media/Logo-Capstone.f486188199165f3fcb37.png')
  // });

  // it('Should have a title', () => {
  //   cy.get('h1')
  //     .should('have.text', 'Troubadour')
  // });

  // it('Should have a hamburger menu', () => {
  //   cy.get('.mobile-nav-wrapper')
  //     .should('exist')
  // });

  // it('Should open the hamburger menu', () => {
  //   cy.get('.mobile-menu')
  //     .wait(1000)
  //     .click()
  //     .wait(1000)
  //     .get('.open')
  //     .should('exist')
  // });

  // it('Should have a list of links in the expanded menu', () => {
  //   cy.get('.mobile-menu')
  //     .click()
  //     .wait(1000)
  //     .get('.mobile-link')
  //     .should('have.length', 3)
  //     .get('.mobile-link')
  //     .first()
  //     .should('have.text', 'Home')
  //     .get('.mobile-link')
  //     .eq(1)
  //     .should('have.text', 'Submission Form')
  //     .get('.mobile-link')
  //     .eq(2)
  //     .should('have.text', 'All Submissions')
  // });

  // it('Should have a button on the submission details page to select a winner', () => {
  //   // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json' }).as('admin-response')
  //     cy.get('.login-button')
  //     .wait(1000)
  //     .click({ force: true })
  //     // .wait('@admin-response')
  //     .get('button')
  //     .contains('Select As Winner')
  //     .should('have.text', 'Select As Winner')
  // });

  // it('Should display a confirmation modal after the winner selection button is clicked', () => {
    // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json' }).as('admin-response')
    // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json'}).as('admin-response')
  //     cy.get('.login-button')
  //     .wait(1000)
  //     .click({ force: true })
  //     // .wait('@admin-response')
  //     .get('button')
  //     .contains('Select As Winner')
  //     .click()
  //     .get('.modal-container')
  //     .should('exist')
  // });

  // it('Should close the modal', () => {
  //   // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json' }).as('admin-response')
  //     cy.get('.login-button')
  //     .wait(1000)
  //     .click({ force: true })
  //     // .wait('@admin-response')
  //     .get('button')
  //     .contains('Select As Winner')
  //     .click()
  //     .get('.modal-container')
  //     .should('exist')
  //     .get('.x-button')
  //     .click()
  //     .get('.modal-container')
  //     .should('not.exist')
  // });

  // it('Should close the modal by clicking the cancel button', () => {
  //   // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json' }).as('admin-response')
  //     cy.get('.login-button')
  //     .wait(1000)
  //     .click({ force: true })
  //     // .wait('@admin-response')
  //     .get('button')
  //     .contains('Select As Winner')
  //     .click()
  //     .get('.modal-container')
  //     .should('exist')
  //     .contains('Cancel')
  //     .click()
  //     .get('.modal-container')
  //     .should('not.exist')
  // });

  it('Should select a winner', () => {
    // cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json' }).as('admin-response')
      cy.get('.login-button')
      .wait(1000)
      .click({ force: true })
      // .wait('@admin-response')
      .get('button')
      .contains('Select As Winner')
      .click()
      // .intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'update-winner-response.json' }).as('update-winner-response')
      .get('.modal-container')
      .should('exist')
      .contains('Select Winner')
      .click()
      // .wait('@update-winner-response')
      // .intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'get-winner-response.json' }).as('get-winner-response')
      .visit('http://localhost:3000/')
      // .wait('@get-winner-response')
      .get('.winner')
      .should('have.text', 'Submission 1 is the winner!!!!!!!')
  });

  // it('Should favorite a submission', () => {
  //   cy.intercept('POST', 'https://troubadour-be.herokuapp.com/graphql', { fixture: 'admin-response.json' }).as('admin-response')
  //     .get('.login-button')
  //     .wait(1000)
  //     .click({ force: true })
  //     .wait('@admin-response')
  // });
});