import SeasonPicker from "./SeasonPicker.vue";
import "../assets/main.css";

describe("SeasonPicker", () => {
  it("emits changeYears event when a new season is selected", () => {
    const spy = cy.spy();

    cy.mount(SeasonPicker, { 
      props: { seasons: [2023, 2024] },
      listeners: {
        'changeYears': spy
      }
    })
    .then(() => {
      
      cy.get("select").select("2023");

      // Check that the event has been emitted
      expect(spy).to.be.calledOnce
    });
  });
});
