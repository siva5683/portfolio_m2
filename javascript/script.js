const words = ["Developer", "Designer", "Creator"];
let index = 0;
const glitchText = document.getElementById('glitchText');

function showNextWord() {
  index = (index + 1) % words.length;
  glitchText.textContent = words[index];
  glitchText.setAttribute('data-text', words[index]);
}

// Change word every 3 seconds for smooth cycle
setInterval(showNextWord, 2000);
