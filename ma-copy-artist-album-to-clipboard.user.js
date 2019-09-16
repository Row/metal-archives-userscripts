// ==UserScript==
// @name       Metal-Archives Copy artist - album to clipboard
// @namespace  https://github.com/Row/metal-archives-userscripts
// @version    0.1.3
// @grant GM_setClipboard
// @grant unsafeWindow
// @description Adds a button beside each album tilte which copies to 'artist name - album name' to clipboard.
// @match      https://www.metal-archives.com/bands/*
// @copyright  2019+, Rowolta
// ==/UserScript==

var $, jQuery, artist,
    tmpl = '<a class="iconContainer ui-state-default ui-corner-all" href="#" title="Copy to clipboard">\
                <span class="ui-icon ui-icon-copy">Copy</span>\
            </a>';
function renderButtons()
{
    $("#band_disco a.other, #band_disco a.album,  #band_disco a.single,  #band_disco a.demo").each(function() {
        var cpStr = artist + " - " + $( this ).text();
        $(tmpl).insertBefore($( this )).click(function(event) {
            event.preventDefault();
            GM_setClipboard(cpStr + "\n");
            $('<div style="color:#FFF;background: #6D4C4C; padding: 3px; position: absolute; top: -20px; left: -20px; white-space: nowrap"></div>')
            .appendTo($(this).css('position', 'relative'))
                .text('Copied "' + cpStr + '" to clipboard').show().delay(2000).fadeOut();
        });
    });
}

function waitUntilAjaxIsLoaded()
{
    if($('#band_disco table a').length > 0)
        renderButtons();
    else
        window.setTimeout(waitUntilAjaxIsLoaded, 500);
}

function waitUntilJqueryHasLoaded()
{
    /* jQuery from site */
    if (unsafeWindow.jQuery) {
        $ = unsafeWindow.jQuery;
        jQuery = unsafeWindow.jQuery;
        artist = $('h1.band_name').text();
        waitUntilAjaxIsLoaded(); // Init
    } else {
        window.setTimeout(waitUntilJqueryHasLoaded, 500);
    }
}
waitUntilJqueryHasLoaded();
