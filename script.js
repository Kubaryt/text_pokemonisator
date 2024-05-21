function pokemonisate() {
    const inputedText = getInputElementValue();
    const outputText = convertText(inputedText);
    showOutputText(outputText);
}

function getInputElementValue() {
    let inputedText = document.getElementById('js-text-input').value;
    if (inputedText === "") {
        // If there's no text, show an error message
        document.querySelector(".js-text-output").innerHTML = `
        <p class="error">Please input a text!</p>`;
        document.querySelector('.input-button').classList.add('input-button-blank-text')
        return;
    }
    inputedText = inputedText.split(/[,. ]/);
    return inputedText
}

function convertText(textString) {
    textString.forEach((word, i) => {
        word = word.split("");
        word.forEach((letter, index) => {
            if (index === 0 || index === word.length - 1) {
                // If it's the first or last letter of the word, make it lower or uppercase 50/50
                if (Math.random() > 0.5) {
                    letter = letter.toLowerCase();
                } else {
                    letter = letter.toUpperCase();
                }
            } else if ((index + 1) % 2 === 0 || (index + 1) % 5 === 0) {
                // If it's letter divided by 2, 5 make it uppercase
                letter = letter.toUpperCase();
            }
            word[index] = letter;
        });
        textString[i] = word.join("");
    });
    return textString;
}

function showOutputText(textString) {
    document.querySelector(".js-text-output").innerHTML = `
    <h2>Pokemonised text:</h2>
    <p>${textString.join(" ")}</p>`;
    document.querySelector('.input-button').classList.remove('input-button-blank-text')
}