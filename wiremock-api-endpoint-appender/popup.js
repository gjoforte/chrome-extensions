document.getElementById('requests').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const text = "__admin/requests";
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url + text });
    });
});
  