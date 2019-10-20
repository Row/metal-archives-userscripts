// ==UserScript==
// @name       Metal-Archives Copy artist - album to clipboard
// @namespace  https://github.com/Row/metal-archives-userscripts
// @version    0.1.3
// @grant GM_setClipboard
// @grant unsafeWindow
// @description Adds a button next to each album title, when clicked 'artist name - album name' is copied to the clipboard.
// @match      https://www.metal-archives.com/bands/*
// @copyright  2019+, Rowolta
// ==/UserScript==

var artist,
    tmpl = `<div style="color:#FFF;background: #6D4C4C; padding: 3px; position: absolute; top: -20px; left: -20px; white-space: nowrap"></div>
            <a class="iconContainer ui-state-default ui-corner-all" href="#" title="Copy to clipboard">\
                <span class="ui-icon ui-icon-copy">Copy</span>\
            </a>`;
    tmpl = tmpl.trim();
function renderButtons() {
    artist = document.querySelector('h1.band_name a').textContent;
    let band_disco = document.querySelectorAll("#band_disco a.other, #band_disco a.album,  #band_disco a.single,  #band_disco a.demo");
    band_disco.forEach(link => {
        let cpStr = `${artist} " - " ${link.textContent}`;
        let elements = generateTemplate(tmpl, cpStr);
        elements.forEach(elem => {
            link.prepend(elem);
        });
    });
}

function generateTemplate(html, cpStr) {
    let copiedTemplateString = `<div style="color:#FFF;background: #6D4C4C; padding: 3px; position: absolute; top: -20px; left: -20px; white-space: nowrap"></div>`.trim();
    let copiedTemplate = document.createElement('template');
    copiedTemplate.innerHTML = copiedTemplateString;
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    let popUp = template.content.children[0];
    template.content.children[1].addEventListener('click', (event) => {
        event.preventDefault();
        GM_setClipboard(cpStr + "\n");
        popUp.innerText = `Copied "${cpStr}" to clipboard`;
        popUp.style.position = 'relative';
        setTimeout(() => {
            popUp.style.display = 'none';
        }, 2000);
        
    });
    return template.content.childNodes;
}

function waitUntilAjaxIsLoaded() {
    let band = document.querySelector('#band_disco table a');
    if (band)
        renderButtons();
    else
        window.setTimeout(waitUntilAjaxIsLoaded, 500);
}

waitUntilAjaxIsLoaded();

