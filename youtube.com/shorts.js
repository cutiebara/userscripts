// ==UserScript==
// @name         YouTube URL Modifier for Shorts
// @namespace    cutiebara
// @version      1.0
// @description  Replace "/shorts/" with "/video/" in YouTube URLs
// @author       cutiebara
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  // Function to replace "/shorts/" with "/video/"
  function replaceYouTubeShortsLink() {
    let currentUrl = window.location.href;

    if (currentUrl.includes("/shorts/")) {
      let newUrl = currentUrl.replace("/shorts/", "/video/");
      window.location.replace(newUrl);
    }
  }

  // Run the function after a short delay to ensure the page is fully loaded
  setTimeout(replaceYouTubeShortsLink, 1000);

  // Continuously check for URL changes
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      replaceYouTubeShortsLink();
    }
  }).observe(document, { subtree: true, childList: true });
})();
