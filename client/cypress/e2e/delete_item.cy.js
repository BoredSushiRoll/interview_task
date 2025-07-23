describe('Delete Item', () => {
  const baseUrl = 'http://localhost:5173';

  it('logs in and deletes an item', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');
    cy.get('button[type="submit"]').click();

    cy.location('pathname', { timeout: 6000 }).should('eq', '/items');

    // Grab first item text
    cy.get('ul > li').first().then(($li) => {
      const itemText = $li.text();

      // Delete it
      cy.wrap($li).contains('Delete').click();

      // Make sure it's gone
      cy.contains(itemText).should('not.exist');
    });
  });
});
