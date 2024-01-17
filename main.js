// var navigatedPGlink = document.referrer;

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/product.html') {
    let navigatedPGlink = document.referrer;
    let link = document.getElementById("navigated-pg-link");
    let fileName = navigatedPGlink.split('/').pop().replace('.html', '');
    link.href = navigatedPGlink;
    link.textContent = fileName;
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


