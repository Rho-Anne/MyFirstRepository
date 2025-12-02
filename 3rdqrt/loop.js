const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1 ||n>  1000) {
        resultDiv.textContent = 'Please enter a valid number for number (1 to 1000).';
        resultDiv.style.color = 'purple';
        return;
    }

    for (let i = 1; i <= n; i++) {
        resultDiv.innerHTML = 'Galing, Good GOO(n)d.';
    }

    let output = '';
    for (let i = 1; i <= n; i++) {
        output +=`Counting: ${i}\n`;
    }
    resultDiv.textContent = output;
    resultDiv.style.color = 'violet';
});