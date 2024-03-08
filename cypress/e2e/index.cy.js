// https://on.cypress.io/api

describe("Switch season", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("test if we can select years seasons", () => {
    cy.get("select").should("be.visible");
    cy.get("option").should("have.length", 2);

    cy.get("select").children().first().should("have.value", "2023");
    cy.get("select").children().last().should("have.value", "2024");

    cy.get("select").select("2023");

    cy.get("select").should("have.value", "2023");
    cy.get("#meeting_date-0").should(
      "have.text",
      "Thu, 23 Feb 2023 09:00:00 GMT"
    );

    cy.get("select").select("2024");

    cy.get("select").should("have.value", "2024");
    cy.get("#meeting_date-0").should(
      "have.text",
      "Thu, 29 Feb 2024 13:30:00 GMT"
    );
  });
});

describe("Select metting", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("test if we can select a meeting", () => {
    cy.get("select").select("2023");

    cy.get("#button_meeting-15")
      .should("have.class", "bg-primary-700")
      .should("have.not.class", "bg-blue-700")
      .click()
    cy.get("#button_meeting-15")
      .should("have.class", "bg-blue-700")
      .should("have.not.class", "bg-primary-700");

    cy.get("#meeting_title").should("have.text", "Japanese Grand Prix");
  });
});
