describe('Logout', () => {
  it.only('passes', () => {
    cy.login()

    cy.logout()
    cy.title().should('eq', 'Sign in · GitLab')
  })
})