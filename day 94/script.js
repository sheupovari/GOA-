
const contentDiv = document.getElementById('content');
const toggleButton = document.getElementById('toggleButton');


toggleButton.addEventListener('click', () => {
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        contentDiv.style.display = 'block';
        toggleButton.textContent = 'ამოხსნა';
    } else {
        contentDiv.style.display = 'none';
        toggleButton.textContent = 'გამოჩენა';
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        alert('თქვენ დააჭირეთ მარცხენა კურსორს!');
    } else if (event.key === 'ArrowRight') {
        alert('თქვენ დააჭირეთ მარჯვენა კურსორს!');
    }
});
