chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "getText") {
      const textContent = document.getElementsByClassName('post-body')[0].textContent;
      sendResponse(textContent);
    }
  });
  