document.addEventListener('DOMContentLoaded', function () {
  // Get the referring page's link and display it on product.html
  if (window.location.pathname === '/product.html') {
    let navigatedPGlink = document.referrer;

    // Check if referrer is available and not an empty string
    if (navigatedPGlink && navigatedPGlink !== '') {
      console.log('Referrer:', navigatedPGlink);
      let link = document.getElementById("navigated-pg-link");
      let fileName = navigatedPGlink.split('/').pop().replace('.html', '');
      link.href = navigatedPGlink;
      link.textContent = fileName;
    } else {
      console.log('Referrer information not available or empty.');
    }
  }

  // Link fetch for product.html
  let productLinks = document.querySelectorAll('a[href="/product.html"]');
  
  productLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      localStorage.setItem('clickedProductId', link.id);
    });
  });

  // Link fetch for flavours.html
  if (window.location.pathname === '/flavours.html') { // Corrected the pathname here
    let flavoursLinks = document.querySelectorAll('a[href="/flavours.html"]');
  
    flavoursLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        let cakeflavourId = link.getAttribute('data-flavour-id');
        if (cakeflavourId) {
          localStorage.setItem('clickedFlavourId', cakeflavourId);
          window.location.href = link.getAttribute('href');
        } else {
          console.error('Flavour ID not found on the link:', link);
        }
      });
    });
  }
});



