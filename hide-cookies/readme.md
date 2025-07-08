# manifest.json
This file defines the basic properties of your Chrome extension.
It specifies the name, version, and permissions, and tells Chrome
which JavaScript files (content scripts) to inject into web pages.

## host_permissions
### <all_urls>
This allows the extension to run on all websites.
You can restrict this to specific URLs if needed, e.g., "https://*.example.com/*"

## content_scripts
### "matches": ["<all_urls>"]
This specifies that the content script should run on all URLs.
### "js": ["content.js"]
This is the JavaScript file that will be injected.
### "run_at": "document_idle"
This ensures the script runs after the page has largely loaded.