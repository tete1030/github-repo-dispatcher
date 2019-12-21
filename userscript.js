// ==UserScript==
// @name         Github Repository Dispatch Trigger
// @version      0.1
// @description  Add repository_dispatch trigger for Github Actions
// @author       Texot
// @include      https://github.com/tete1030/github-repo-dispatcher
// @require      https://code.jquery.com/jquery-latest.min.js
// @match        https://github.com/*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(() => {
        let btn = $("<a class='btn btn-sm'>Repo Dispatch</a>");
        btn.on("click", () => {
            let token = GM_getValue("token", "");
            if (!token) {
                token = window.prompt("Token");
            }
            if (!token) return;
            GM_setValue("token", token);
            let pathArray = window.location.pathname.split('/');
            if (pathArray.length < 3) return;
            let type = window.prompt("Type", GM_getValue("type", ""));
            if (!type) return;
            GM_setValue("type", type);
            let payload = window.prompt("Client Payload", GM_getValue("payload", ""));
            if (payload === null) return;
            GM_setValue("payload", payload);
            let data = {event_type: type};
            try {
                if (payload) data.client_payload = JSON.parse(payload);
            } catch (e) {
                window.alert("JSON parse failed: " + e.message);
                return;
            }
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://api.github.com/repos/" + pathArray[1] + "/" + pathArray[2] + "/dispatches",
                headers: {"Authorization": "token " + token, "Accept": "application/vnd.github.everest-preview+json"},
                data: JSON.stringify(data),
                onload: (resp) => {
                    if (resp.status == 204 || resp.status == 200) {
                        console.log("Repo dispatch succeed: " + resp.responseText);
                        window.alert("Repo dispatch succeed" + (resp.responseText?(": " + resp.responseText):""));
                    } else {
                        var message = resp.responseText;
                        try {
                            message = JSON.parse(message).message;
                        } catch (e) {}
                        console.log("Repo dispatch failed: " + resp.responseText);
                        window.alert("Repo dispatch failed: " + message);
                    }
                },
                onerror: (e) => {
                    console.log("Repo dispatch failed: " + e);
                    window.alert("Repo dispatch failed: " + e.message);
                }
            });
        });
        $(".pagehead-actions").eq(0).prepend($("<li></li>").append(btn));
    });

})();
