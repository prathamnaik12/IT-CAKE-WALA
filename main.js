// var navigatedPGlink = document.referrer;

window.addEventListener('load',function(){
  if(window.location.pathname ==='/product.html'){
    let navigatedPGlink = document.referrer;
    let link = document.getElementById("navigated-pg-link")
    let fileName = navigatedPGlink.split('/').pop().replace('.html', '');
    link.href = navigatedPGlink
    link.textContent = fileName
    let productImg = document.getElementById("product-img")
    let atag =this.document.querySelector('a[href="./product.html"]')
    let imgtag = atag.querySelector('img')
    productImg.src = imgtag.src
  }
})

