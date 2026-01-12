// Elements
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const messageBox = document.getElementById('messageBox');
const questionBox = document.getElementById('questionBox');
const noBox = document.getElementById('noBox');
const yesBox = document.getElementById('yesBox');

const heartsContainer = document.getElementById('heartsContainer');

// Button events
nextBtn.onclick = () => {
  messageBox.classList.add('hidden');
  questionBox.classList.remove('hidden');
}

noBtn.onclick = () => {
  questionBox.classList.add('hidden');
  noBox.classList.remove('hidden');
}

retryBtn.onclick = () => {
  noBox.classList.add('hidden');
  questionBox.classList.remove('hidden');
}

yesBtn.onclick = () => {
  questionBox.classList.add('hidden');
  yesBox.classList.remove('hidden');
}

// Generate floating hearts dynamically
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Add multiple hearts continuously
setInterval(createHeart, 500);
