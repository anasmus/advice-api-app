function updateAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(result => {
    advice.innerText = `“${result.slip.advice}”`;
    adviceId.innerText = `Advice # ${result.slip.id}`;
  });
}

const iconButton = document.getElementById('icon');
const advice = document.getElementById('advice');
const adviceId = document.getElementById('advice-id');
updateAdvice();

iconButton.addEventListener('click', updateAdvice);