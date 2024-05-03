function pokemonisate() {
    // Get the inputed text
    let inputedText = document.getElementById('js-text-input').value;
    // Split the inputed text into an array of words
    if (inputedText === "") {
        // If there's no text, show an error message
        document.querySelector(".js-text-output").innerHTML = `
        <p class="error">Please input a text!</p>`;
        document.querySelector('.input-button').classList.add('input-button-blank-text')
        return;
    }
    inputedText = inputedText.split(/[,. ]/);
    // Loop through each word
    inputedText.forEach((word, i) => {
        // Split the word into an array of letters
        word = word.split("");
        word.forEach((letter, index) => {
            if (index === 0) {
                // If it's the first letter of the word, make it lower or uppercase 50/50
                if (Math.random() > 0.5) {
                    letter = letter.toLowerCase();
                }
                else {
                    letter = letter.toUpperCase();
                }
            }
            else if ((index + 1) % 2 === 0 || (index + 1) % 5 === 0) {
                // If it's letter divided by 2, 5 make it uppercase
                letter = letter.toUpperCase();
            }
            else if (index === word.length - 1) {
                // If it's last letter of the word, make it lower or uppercase 50/50
                if (Math.random() > 0.5) {
                    letter = letter.toLowerCase();
                }
                else {
                    letter = letter.toUpperCase();
                }
            }
            word[index] = letter;
        });
        // Replace the word with the new one
        inputedText[i] = word.join("");
    });
    // Add new text on website
    document.querySelector(".js-text-output").innerHTML = `
    <h2>Pokemonised text:</h2>
    <p>${inputedText.join(" ")}</p>`;
    document.querySelector('.input-button').classList.remove('input-button-blank-text')
}
