document.getElementById('sqrtForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number = parseFloat(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(number) || number < 0) {
        resultDiv.textContent = 'გთხოვთ შეიყვანეთ დადებითი რიცხვი';
        resultDiv.style.color = 'red';
    } else {
        const sqrtValue = Math.sqrt(number).toFixed(2);
        resultDiv.textContent = `რიცხვის ${number} ფესვი არის ${sqrtValue}`;
        resultDiv.style.color = 'green';
    }
});