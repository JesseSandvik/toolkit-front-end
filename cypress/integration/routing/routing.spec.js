describe('Routing', () => {
  it('01. Displays the welcome message when navigating to the root', () => {
    cy.visit('http://localhost:3000').contains('Welcome!');
  });
  it('02. Displays the register heading when user clicks the Sign Up button', () => {
    cy.visit('http://localhost:3000');
    cy.get('#signup-btn').click();
    cy.contains('register');
  });
});
