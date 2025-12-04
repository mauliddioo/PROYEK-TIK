// Toggle Navbar
const navbarToggle = document.getElementById('navbarToggle');
const navbar = document.getElementById('navbar');

navbarToggle.addEventListener('click', function() {
  navbar.classList.toggle('show');
  navbarToggle.classList.toggle('active');
});

// Page Navigation (dropdown Home: data-page="beranda" / "latar-belakang" / "data")
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetPage = this.getAttribute('data-page');

    // sembunyikan semua page
    pages.forEach(page => {
      page.classList.remove('active');
    });

    // tampilkan page target
    const pageEl = document.getElementById(targetPage);
    if (pageEl) {
      pageEl.classList.add('active');
      // scroll halus ke atas konten
      pageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // tutup navbar
    navbar.classList.remove('show');
    navbarToggle.classList.remove('active');
  });
});




