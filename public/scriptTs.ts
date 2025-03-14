function alertUser() {
  const secondParagraph: HTMLElement | null = document.getElementById("2p");
  if (secondParagraph === null) {
    alert("Second paragraph not found!");
  } else {
    secondParagraph.innerText = "Hello CMNDO!";
  }
}
