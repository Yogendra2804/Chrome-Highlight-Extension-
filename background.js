chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendToSheet") {
        const webHook = "https://script.google.com/macros/s/AKfycbzOtbmAf5i7v-ysl3_1VSmE9J0rg65oKnHFSTic0iKhurJ86f43hLOEYlzUqX7sFtmL/exec"; 

        fetch(webHook, {
            method: "POST",
            body: JSON.stringify(message.payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.text())
        .then(result => {
            console.log("Data sent to sheet:", result);
        })
        .catch(error => {
            console.error("Fetch failed in background:", error);
        });
    }
});
