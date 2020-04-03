// https://docs.cypress.io/api/introduction/api.html

describe("Check slider element", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('.slider-bg').should('exist');
    cy.get('.slider-btn').should('exist');
    cy.get('.slider-dots').should('exist');
    cy.get('.slider-dot').should('exist');
    cy.get('.slider-text').should('exist');
  });
});
