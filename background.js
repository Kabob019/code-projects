chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clear_canvas") {
      chrome.tabs.query({active:
  