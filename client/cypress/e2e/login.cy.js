describe('Login Page', () => {
  const baseUrl = 'http://localhost:5173';

  it('logs in with valid credentials', () => {
    cy.visit(`${baseUrl}/login`);

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    // Wait for redirect and protected route access
    cy.url().should('include', '/items');
    cy.contains('Items'); // or check if token exists
  });

  it('shows error on invalid credentials', () => {
    cy.visit(`${baseUrl}/login`);

    cy.get('input[name="username"]').type('wrong');
    cy.get('input[name="password"]').type('wrong');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials'); // Make sure this is shown in your UI
  });
});
