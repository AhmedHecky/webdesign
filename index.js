// Text array of letters
const text = [
  "R",
  "e",
  "a",
  "d",
  "y",
  " ",
  "t",
  "o",
  " ",
  "l",
  "o",
  "c",
  "k",
  " ",
  "i",
  "n",
  "?",
];
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

const typeEffect = () => {
  // Get the current letter based on charIndex
  const currentChar = text.slice(0, charIndex).join(""); // Join the sliced array to form a string
  dynamicText.textContent = currentChar;

  // Typing logic
  if (!isDeleting && charIndex < text.length) {
    // If typing, increment the charIndex
    charIndex++;
    setTimeout(typeEffect, 100); // Typing speed
  } else if (isDeleting && charIndex > 0) {
    // If deleting, decrement the charIndex
    charIndex--;
    setTimeout(typeEffect, 50); // Deleting speed
  } else {
    // Pause and switch between typing and deleting
    isDeleting = false;
    setTimeout(typeEffect, 1200); // Pause before switching
  }
};

// Start typing animation when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
