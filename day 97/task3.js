function highlightWord(word) {
    const paragraph = document.getElementById('text');
    const text = paragraph.innerHTML;
    const highlightedText = text.replace(new RegExp(`(${word})`, 'g'), '<mark>$1</mark>');
    paragraph.innerHTML = highlightedText;
}