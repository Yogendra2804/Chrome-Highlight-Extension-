let selectedText = "";

document.addEventListener("mouseup", (event) => {
    const clickedInsidePopup = event.target.closest("#popupDiv") || event.target.id === "FloatBtn";
    if (clickedInsidePopup) return;

    selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        showBtn(event);
    } else {
        removeBtn();
    }
});


function showBtn(event) {
    removeBtn(event);
    const button = document.createElement("button");
    button.textContent = "Save?";
    button.id = "FloatBtn";
    button.style.position = "fixed";
    button.style.top = `${event.clientY + 30}px`;
    button.style.left = `${event.clientX + 20}px`;
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.border = "1px solid white";
    button.style.borderRadius = "10px";
    button.style.padding = "10px";
    button.style.cursor = "pointer";
    button.style.zIndex = 10000;
    button.style.height = "50px"
    button.style.width = "70px"


    button.addEventListener("click", () => {
        console.log("Clicked Save");
        getDetails();
        removeBtn();
    });

    document.body.appendChild(button);
}
function removeBtn() {
    const btn = document.getElementById("FloatBtn");
    if (btn) btn.remove();
}

function getDetails() {
    console.log("getDetails() was called");

    const title = document.title;
    const pageURL = window.location.href;
    const time = new Date().toISOString();

    const oldPopup = document.getElementById("popupDiv");
    if (oldPopup) oldPopup.remove();

    const popupDiv = document.createElement("div");
    popupDiv.id = "popupDiv";
    popupDiv.innerHTML = `
    <p><strong>Selected Text:</strong> ${selectedText}</p>
    <p><strong>Page Title:</strong> ${title}</p>
    <p><strong>Page URL:</strong> ${pageURL}</p>
    <p><strong>Timestamp:</strong> ${time}</p>
    <button id="confirmBtn">Send to Sheet</button>
    <button id="cancelBtn">Cancel</button>
  `;


    popupDiv.style.width = "400px"
    popupDiv.style.position = "fixed";
    popupDiv.style.bottom = "20px";
    popupDiv.style.right = "20px";
    popupDiv.style.backgroundColor = "rgb(91, 78, 78)";
    popupDiv.style.color = "white";
    popupDiv.style.padding = "20px";
    popupDiv.style.borderRadius = "10px";
    popupDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    popupDiv.style.zIndex = 99999;

    document.body.appendChild(popupDiv);

            // confirmBtn styling 
    const confirmBtn = document.getElementById("confirmBtn");

     confirmBtn.style.border = "1px solid black";
     confirmBtn.style.borderRadius = "5px"
     confirmBtn.style.backgroundColor = "#c2ccc5"
     confirmBtn.style.color = "#black"
     confirmBtn.style.height = "30px"
     confirmBtn.style.margin ="5px"
     confirmBtn.style.padding ="10px"
     confirmBtn.style.marginTop ="15px"



    
    document.getElementById("confirmBtn").addEventListener("click", () => {

        console.log("Sending to Sheet:\n", selectedText, "\nTitle: ", title, "\nPage URL : ", pageURL, "\nTime: ", time);

        const payload = {
            text: selectedText,
            URL: pageURL,
            title: title,
            time: time
        };


        const webBook = "https://script.google.com/macros/s/AKfycbzOtbmAf5i7v-ysl3_1VSmE9J0rg65oKnHFSTic0iKhurJ86f43hLOEYlzUqX7sFtmL/exec";


        chrome.runtime.sendMessage({
            action: "sendToSheet",
            payload: {
                text: selectedText,
                title: title,
                URL: pageURL,
                time: time
            }
        });


        popupDiv.remove();
    });
    
        // cancelBtn styling 
    const cancelBtn = document.getElementById("cancelBtn");

    cancelBtn.style.border = "1px solid black";
    cancelBtn.style.borderRadius = "5px"
    cancelBtn.style.backgroundColor = "#c2ccc5"
    cancelBtn.style.color = "#black"
    cancelBtn.style.height = "30px"
    cancelBtn.style.margin ="5px"
    cancelBtn.style.padding ="10px"
    cancelBtn.style.marginTop ="15px"

    document.getElementById("cancelBtn").addEventListener("click", () => {
        popupDiv.remove();
    });
}

