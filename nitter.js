// ==UserScript==
// @name         Redirect X/Twitter to Nitter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically redirects x.com and twitter.com URLs to nitter.net
// @author       cb
// @match        *://x.com/*
// @match        *://www.x.com/*
// @match        *://twitter.com/*
// @match        *://www.twitter.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const NITTER_HOST = 'nitter.net';
    const currentHost = window.location.hostname;

    // Only redirect if we're actually on one of the target hosts
    if (/^(www\.)?(x|twitter)\.com$/i.test(currentHost)) {
        const newUrl =
            window.location.protocol + '//' +
            NITTER_HOST +
            window.location.pathname +
            window.location.search +
            window.location.hash;

        window.location.replace(newUrl);
    }
})();
