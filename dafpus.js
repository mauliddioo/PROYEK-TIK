document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById('search-biblio');
    const items = document.querySelectorAll('.bibliography li');

    // fitur search + animasi hide/show
    searchBox.addEventListener('input', function () {
        const query = searchBox.value.toLowerCase();
        items.forEach(function (item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.classList.remove('hidden');   // muncul dengan fade
            } else {
                item.classList.add('hidden');      // menghilang dengan fade
            }
        });
    });
      document.getElementById('btn-back').onclick = function () {
           window.location.href = 'Shrimp Pond Analysis.html';
    };
});