/* const currentUrl = window.location.href;

const url = new URL(currentUrl);

const morse = url.searchParams.get("translateToMorse");

let morseUrl = "https://api.funtranslations.com/translate/morse.json?text="+morse;

  fetch(morseUrl)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    const morseCode = json; 
    const mainContent = document.getElementById('mainMorse');

    let morseContainer = document.createElement('div');
    morseContainer.textContent = morseCode.contents.translated;

    mainContent.appendChild(morseContainer);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */