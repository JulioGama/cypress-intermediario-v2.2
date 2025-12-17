describe('Logout', () => {
  it('passes', () => {
    cy.login()

    cy.logout()
    cy.title().should('eq', 'Sign in · GitLab')
  })
})