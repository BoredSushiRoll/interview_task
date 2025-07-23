describe('Edit Item', () => {
  const baseUrl = 'http://localhost:5173';

  it('logs in and edits an existing item', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    cy.location('pathname', { timeout: 6000 }).should('eq', '/items');

    // Click the first Edit button
    cy.contains('Edit').first().click();

    // Edit input at top of page
    cy.get('input[placeholder="Enter item name"]')
      .clear()
      .type('Updated Item');

    // Submit
    cy.get('button[type="submit"]').click();

    // Check that it appears
    cy.contains('Updated Item');
  });
});
