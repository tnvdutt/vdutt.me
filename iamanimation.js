const words = ["Minimalistic.", "Simple.", "Direct."];
let i = 0;
let j = 0;
const speed = 150;
const typedTextElement = document.getElementById("typed-text");

function typeWord() {
    if (j < words[i].length) {
        typedTextElement.textContent += words[i].charAt(j);
        j++;
        setTimeout(typeWord, speed);
    } else {
        setTimeout(eraseWord, 2000);  // Pause before erasing
    }
}

function eraseWord() {
    if (j > 0) {
        typedTextElement.textContent = words[i].substring(0, j - 1);
        j--;
        setTimeout(eraseWord, speed);
    } else {
        i = (i + 1) % words.length;
        setTimeout(typeWord, speed);
    }
}

typeWord();  // Start typing the first word
