const generateBtn = document.getElementById('generate-btn');
const randomNumber = document.getElementById('random-number');

generateBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    randomNumber.textContent = randomNum;
});