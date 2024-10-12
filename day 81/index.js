document.getElementById('generateBtn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; 
    document.getElementById('result').innerText = randomNumber;
});