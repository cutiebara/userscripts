// ==UserScript==
// @name         Google Calendar Location Replacer
// @namespace    https://github.com/cutiebara/userscripts
// @version      1.0
// @description  Replaces "Location" with custom address in Google Calendar events
// @author       cutiebara
// @match        https://calendar.google.com/calendar/u/0/r/eventedit*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("location") === "Location") {
    urlParams.set("location", "Økern Torgvei 13, 0580 Oslo"); // Replace with your encoded coordinates
    window.history.replaceState({}, "", `${location.pathname}?${urlParams}`);
  }
})();
