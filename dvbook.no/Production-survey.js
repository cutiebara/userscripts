// ==UserScript==
// @name         Production-survey highlighter
// @namespace    https://github.com/cutiebara/userscripts
// @version      1.0
// @description  Replaces "Location" with custom address in Google Calendar events
// @author       cutiebara
// @match        https://dvbook.no/*
// @icon         https://dvbook.no/
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Function to highlight the "Production-survey" links
  function highlightProductionSurveyLinks() {
    // Get all anchor tags on the page
    const links = document.querySelectorAll("a");

    // Iterate through each link
    links.forEach((link) => {
      // Check if the link text includes "Production-survey"
      if (link.textContent.includes("Production-surveys")) {
        // Apply the highlight style
        link.style.backgroundColor = "yellow"; // Change to your preferred highlight color
        link.style.color = "red"; // Change to your preferred text color
        link.style.fontWeight = "bold";
      }
    });
  }

  // Run the function to highlight the links
  highlightProductionSurveyLinks();
})();
