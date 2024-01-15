function handleWindowSizeChange() {
  const specialChoicesGrid = document.getElementById("special-choices-grid");
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  if (isMobile) {
    console.log("window")
    specialChoicesGrid.classList.remove("grid-cols-2");
    specialChoicesGrid.classList.add("grid-cols-1");
  } else {
    specialChoicesGrid.classList.remove("grid-cols-1");
    specialChoicesGrid.classList.add("grid-cols-2");
  }
}

// Initial call to set grid based on window size
handleWindowSizeChange();

// Listen for window resize events
window.addEventListener('resize', handleWindowSizeChange);





