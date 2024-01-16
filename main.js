var navigatedPGlink = document.referrer;

window.addEventListener('load',function(){
  if(window.location.pathname ==='/product.html'){
    var navigatedPGlink = document.referrer;
    let link = document.getElementById("navigated-pg-link")
    var fileName = navigatedPGlink.split('/').pop().replace('.html', '');
    link.href = navigatedPGlink
    link.textContent = fileName
  }
})

