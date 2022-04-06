describe('Smoke test', () => {
  it('Makes sure the welcome message shows up', () => {
    cy.visit('http://localhost:3000').contains('Hello World!');
  });
});
