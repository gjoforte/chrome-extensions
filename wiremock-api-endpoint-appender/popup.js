document.getElementById('append').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        //const text = "__admin/requests";
        const selectElement = document.getElementById("request-selector");
        const selectedValue = selectElement.value;
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url + selectedValue });
    });
});
  