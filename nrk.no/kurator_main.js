// ==UserScript==
// @name         Kurator Main nrk.no
// @namespace    https://github.com/cutiebara/userscripts
// @version      1.0
// @description  Skips the top bar and shows only content on nrk.no
// @author       cutiebara
// @match        https://www.nrk.no/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  let hasJumped = false;

  function jumpToContent() {
    if (hasJumped) return; // Only jump once

    const anchors = document.querySelectorAll(
      ".nrk-masthead__jump-anchor--enabled"
    );
    anchors.forEach((anchor) => anchor.click());

    hasJumped = true;
  }

  jumpToContent(); // Initial jump

  // Optional: Re-jump if the URL hash changes
  window.addEventListener("hashchange", function () {
    hasJumped = false; // Allow jumping again
    jumpToContent();
  });
})();
