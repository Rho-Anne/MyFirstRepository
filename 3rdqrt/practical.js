const num = document.getElementById('input');
const numInputBtn = document.getElementById('submit');
const resultDiv = document.getElementById('resulthere');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1 ||n > 100) {
        resultDiv.textContent = 'Please enter a valid number for number (1 to 100).';
        resultDiv.style.color = 'purple';
        return;
    }

    for (let i = 1; i <= n; i++) {
        resultDiv.innerHTML = 'Galing.';
    }

    let output = '';    
    for (let i = 1; i <= n; i++) {
         output +=`Counting: ${i}\n`;
    }
    
    resultDiv.textContent = output;
    resultDiv.style.color = 'violet';
})