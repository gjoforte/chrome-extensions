// content.js
// This script is injected into the web page and modifies its CSS.

console.log('Content script (content.js) started.'); // Log when the script begins execution

// Function to apply styles
function applyStyles() {
  console.log('Attempting to apply styles...'); // Log each time applyStyles is called

  // Find the element with the class 'fc-consent-root'
  const consentRoot = document.querySelector('.fc-consent-root');

  // If the consent banner element exists, apply the 'display: none !important;' style.
  // The '!important' flag ensures that this style overrides any other styles.
  if (consentRoot) {
    consentRoot.style.setProperty('display', 'none', 'important');
    console.log('Hidden .fc-consent-root element.');
  } else {
    console.log('.fc-consent-root element not found.');
  }

  // Find the <body> element.
  const body = document.body;

  // If the body element exists, apply the 'overflow: auto !important;' style.
  // This ensures that the page can scroll if content overflows.
  if (body) {
    body.style.setProperty('overflow', 'auto', 'important');
    console.log('Set body overflow to auto.');
  } else {
    console.error('Body element not found. This should not happen.');
  }
}

// Run the function immediately in case elements are already present.
// This might still log "Body element not found" if the script runs before <body> is parsed,
// but it ensures the fastest possible hiding if the element is already there.
applyStyles();

// Add a DOMContentLoaded listener to ensure the script runs after the DOM is fully loaded.
// This is where we safely initialize the MutationObserver.
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired.'); // Log when DOMContentLoaded fires
  applyStyles(); // Apply styles again after DOM is fully loaded

  // Use a MutationObserver to watch for dynamically added elements,
  // especially if the consent banner appears after initial DOM load.
  // This is now safely inside DOMContentLoaded, ensuring document.body exists.
  const observer = new MutationObserver((mutationsList, observer) => {
    console.log('MutationObserver triggered.'); // Log when the observer detects a change
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Check if the consent banner element has been added
        if (document.querySelector('.fc-consent-root')) {
          applyStyles();
          // Removed observer.disconnect() to keep it active for potential re-additions
          // or if multiple consent elements exist.
          break; // Exit the loop after finding and styling
        }
      }
    }
  });

  // Start observing the document body for changes in its children (e.g., new elements being added)
  // This call is now guaranteed to have a valid document.body.
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('MutationObserver started observing document.body.');
  } else {
    console.error('Document body still not found after DOMContentLoaded. This is unexpected.');
  }
});