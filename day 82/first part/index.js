document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityValue = document.getElementById('quantity-value');
    let quantity = 1;

    decreaseBtn.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });

    increaseBtn.addEventListener('click', function () {
        quantity++;
        quantityValue.textContent = quantity;
    });

    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.querySelector('.main-image img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.src = thumbnail.src.replace('-thumbnail', '');
        });
    });
});