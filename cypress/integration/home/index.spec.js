describe("starling client home page", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays two account cards", () => {
    cy.get("[data-cy=account-card]").should("have.length.greaterThan", 0);
  });

  it("has transaction rows", () => {
    cy.get("[data-cy=transaction-row]").should("have.length.greaterThan", 0);
  });
});
