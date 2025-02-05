function toggleSubMenu(buttonElement) {
    // Ambil elemen <ol> (sub-menu) yang ada di sebelah tombol
    const subMenu = buttonElement.closest('a').nextElementSibling;
  
    // Toggle kelas 'show'
    subMenu.classList.toggle('show');
  }