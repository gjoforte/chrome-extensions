chrome.commands.onCommand.addListener(function(command) {
    if (command === "extractText") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: "getText" }, function(response) {
          console.log("Extracted text:", response);
          // You can further display the text in a popup or notification here
        });
      });
    }
  });
  