function showText() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.style.display = 'block';

    setTimeout(() => {
        contentDiv.style.display = 'none';
    }, 3000); 
}