function pokemonisate(element) {
    // Get the inputed text
    let inputedText = element.parentElement.querySelector('input').value;
    // Split the inputed text into an array of words
    inputedText = inputedText.split(/[,. ]/);
    // Loop through each word
    inputedText.forEach((word, i) => {
        // Split the word into an array of letters
        word = word.split("");
        word.forEach((letter, index) => {
            if (index === 0) {
                // If it's the first letter of the word, make it lowercase
                letter = letter.toLowerCase();
            }
            else if ((index + 1) % 2 === 0 || (index + 1) % 3 === 0 || index === word.length - 1) {
                // If it's letter divided by 2, 3 or last letter, make it uppercase
                letter = letter.toUpperCase();
            }
            word[index] = letter;
        });
        // Replace the word with the new one
        inputedText[i] = word.join("");
    });
    // Add new text on website
    document.querySelector(".js-text-output").innerHTML = `
    <p>Pokemonised text:</p>
    <p>${inputedText.join(" ")}</p>`;
}
