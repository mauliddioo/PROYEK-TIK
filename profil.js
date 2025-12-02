document.addEventListener("DOMContentLoaded", function () {
    // Fade-in transition
    const cards = document.querySelectorAll('.profile-card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, i * 350); // Stagger for each card
    });

    // Instagram buttons
    const instaButtons = document.querySelectorAll('.insta-btn');
    instaButtons.forEach(function(button){
        button.addEventListener('click', function(){
            const url = button.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });

    // Tombol kembali
    document.getElementById('btn-back').onclick = function () {
           window.location.href = 'Shrimp Pond Analysis.html';
    };
});
