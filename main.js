// var navigatedPGlink = document.referrer;

document.addEventListener('DOMContentLoaded', function () {
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
});


document.addEventListener('DOMContentLoaded', function() {
  let productLinks = document.querySelectorAll('a[href="./product.html"]');
  
  productLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      localStorage.setItem('clickedProductId', link.id);
    });
  });
});


