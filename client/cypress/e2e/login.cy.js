describe('Login Page', () => {
  const baseUrl = 'http://localhost:5173';

  it('logs in with valid credentials', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();
    cy.wait(100);
    cy.location('pathname', { timeout: 6000 }).should('eq', '/items');
    cy.contains('Item list will go here.');
  });

  it('shows error on invalid credentials', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="username"]').type('wrong');
    cy.get('input[name="password"]').type('wrong');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials');
  });
});
