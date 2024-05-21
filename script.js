function pokemonisate(inputElement) {
    const inputedText = getInputElementValue(inputElement);
    const outputText = convertText(inputedText);
    showOutputText(outputText);
}

function getInputElementValue(inputElement) {
    let inputedText = inputElement.value;
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
}