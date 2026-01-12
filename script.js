const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const messageBox = document.getElementById('messageBox');
const questionBox = document.getElementById('questionBox');
const noBox = document.getElementById('noBox');
const yesBox = document.getElementById('yesBox');

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
