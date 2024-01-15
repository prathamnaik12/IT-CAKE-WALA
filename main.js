function updateClassOnWidthChange() {
    const specialGrid = document.getElementById('special-choices-grid');

    if (window.innerWidth <= 450) {
      specialGrid.classList.remove('grid-cols-2');
      specialGrid.classList.add('grid-cols-1'); 
    }
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 450) {
        specialGrid.classList.remove('grid-cols-1');
        specialGrid.classList.add('grid-cols-2'); 
      } else {
        specialGrid.classList.remove('grid-cols-2'); 
        specialGrid.classList.add('grid-cols-1');
      }
    });
  }

  // Call the function on page load
window.onload(updateClassOnWidthChange())




