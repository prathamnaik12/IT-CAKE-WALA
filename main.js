function handleWindowSizeChange() {
  const specialChoicesGrid = document.getElementById("special-choices-grid");
  const isMobile = window.matchMedia("(max-height: 450px)").matches;

  if (isMobile) {
    console.log("window")
    specialChoicesGrid.classList.remove("grid-cols-2");
    specialChoicesGrid.classList.add("grid-cols-1");
  } else {
    specialChoicesGrid.classList.remove("grid-cols-1");
    specialChoicesGrid.classList.add("grid-cols-2");
  }
}

handleWindowSizeChange();

window.addEventListener('resize', handleWindowSizeChange);





