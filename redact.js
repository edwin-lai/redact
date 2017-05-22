/* globals chrome */

(function () {
  var redacted = false;

  chrome.browserAction.onClicked.addListener(function (tab) {
    var file = redacted ? 'css/unredact_reddit.css' : 'css/redact_reddit.css';
    chrome.tabs.insertCSS({
      file: file
    });
    redacted = !redacted;
  });
}());
