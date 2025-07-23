describe('Create Item', () => {
  const baseUrl = 'http://localhost:5173';

  it('adds a new item successfully', () => {
    // Step 1: login
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    // Step 2: wait for redirect and confirm we're on /items
    cy.location('pathname', { timeout: 6000 }).should('eq', '/items');

    // Step 3: create item
    cy.get('input[placeholder="Enter item name"]').type('Test Item');
    cy.get('button[type="submit"]').click();

    // Step 4: check item appears
    cy.contains('Test Item');
  });
});
