# 🧩 Chrome Extension: Highlight & Save to Google Sheet

This Chrome Extension lets you **highlight text** on any webpage and **save** it to a connected **Google Sheet** along with the page URL, title, and timestamp.

---

## 🚀 Features

- ✅ Highlight and save selected text
- 🌍 Captures the page URL and title
- ⏱️ Adds a timestamp automatically
- 📤 Sends data to Google Sheets via Apps Script
- ⚠️ Shows success/error alerts to the user

---

## 📁 File Structure
highlight-extension/
├── manifest.json # Chrome extension configuration
├── popup.html # UI popup for user interaction
├── content.js # Content script to handle selection and saving
├── background.js # Service worker (optional)
├── styles.css # (Optional) styling for popup
└── README.md # This file



## 2. Set Up Google Sheet + Apps Script
#1 .Open Google Sheets

#2 .Add headers to the first row:
    
    Text | URL | Title | Time Stamp

#3 .Click Extensions → Apps Script

#4 .Paste code from Apps Script. 

#5 .Click Deploy > Manage Deployments > New Deployment

Select Web App

Execute as: Me

Who has access: Anyone

Click Deploy and copy the Web App URL


## 3. Add the Web App URL in content.js
In your content.js file, replace the SCRIPT_URL with the one you copied:


## 4. Load Extension in Chrome
Go to chrome://extensions/

Enable Developer mode

Click Load Unpacked

Select your project folder


## 🙌 Acknowledgments
Google Apps Script

Chrome Extensions Docs
