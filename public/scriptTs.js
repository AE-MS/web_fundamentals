"use strict";
function alertUser() {
    const secondParagraph = document.getElementById("2p");
    if (secondParagraph === null) {
        alert("Second paragraph not found!");
    }
    else {
        secondParagraph.innerText = "Hello CMNDO!";
    }
}
