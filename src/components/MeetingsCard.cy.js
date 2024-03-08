import MeetingsCard from "./MeetingsCard.vue";
import "../assets/main.css";

describe("MeetingsCard.vue", () => {
  const meetings = [
    {
      meeting_name: "Monaco Grand Prix",
      meeting_official_name: "FORMULA 1 GRAND PRIX DE MONACO 2023",
      location: "Monaco",
      country_key: 114,
      country_code: "MON",
      country_name: "Monaco",
      circuit_key: 22,
      circuit_short_name: "Monte Carlo",
      date_start: "2023-05-26T11:30:00",
      gmt_offset: "02:00:00",
      meeting_key: 1210,
      year: 2023,
    },
    {
      meeting_name: "Spanish Grand Prix",
      meeting_official_name: "FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023",
      location: "Barcelona",
      country_key: 1,
      country_code: "ESP",
      country_name: "Spain",
      circuit_key: 15,
      circuit_short_name: "Catalunya",
      date_start: "2023-06-02T11:30:00",
      gmt_offset: "02:00:00",
      meeting_key: 1211,
      year: 2023,
    },
    {
      meeting_name: "Canadian Grand Prix",
      meeting_official_name: "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023",
      location: "Montréal",
      country_key: 46,
      country_code: "CAN",
      country_name: "Canada",
      circuit_key: 23,
      circuit_short_name: "Montreal",
      date_start: "2023-06-16T17:30:00",
      gmt_offset: "-04:00:00",
      meeting_key: 1212,
      year: 2023,
    },
  ];
  let spy;
  beforeEach(() => {
    spy = cy.spy();
    cy.mount(MeetingsCard, {
      props: {
        year: 2024,
        meetings: meetings,
      },
      listeners: {
        changeMeeting: spy,
      },
    }).then(({ wrapper, component }) => {
      // Call a method on your component
      component.getMeetings();
    });
  });

  it("renders the component", () => {
    cy.get(".flex.flex-row.space-x-2").should("be.visible");
  });

  it("opens and closes a meeting", () => {
    // Check the "View" button for the first meeting
    cy.get("#button_meeting-0").should("contain", "View").click();

    // Check that the button text changes to "Close"
    cy.get("#button_meeting-0").should("contain", "Close");

    // Check the "Close" button
    cy.get("#button_meeting-0").click();

    // Check that the button text changes back to "View"
    cy.get("#button_meeting-0").should("contain", "View");
  });
});
