//NAVIGACE SMART SCROLL
function scroll1(bod){
  const el = document.querySelector(bod);
  const y = el.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}


//GALERIE
let i=1
let maxi = 4 // Počet obrázků

function imgswitch(){
  let img1 = document.getElementById('img1')
  let img2 = document.getElementById('img2')
  let img3 = document.getElementById('img3')
  let img4 = document.getElementById('img4')
  console.log("stary " + i);
  i <= 4 ? (i = i) : (i = i - 4)
  console.log("novy " + i);
  img1.src="imgs/img" + i + ".jpg"
  img2.src="imgs/img" + (i < 4 ? i + 1 : i - 3)  + ".jpg"
  img3.src="imgs/img" + (i < 3 ? i + 2 : i - 2) + ".jpg"
  img4.src="imgs/img" + (i < 2 ? i + 3 : i - 1) + ".jpg"
  i++
}

imgswitch() //prvni aby se necekalo 3s
let timer = setInterval(imgswitch, 3000); // interval every 5 s prehodi obrazky


//Galerybig
let galleryImages = document.querySelectorAll('.img');
console.log(galleryImages);


if(galleryImages) {
  galleryImages.forEach((image, index) => {
    image.onclick = function () {
      console.log(image.src);

      //vytvoreni okna
      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      //vytvoreni fullsize obrazku v okne
      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", image.src);
    }
  });

}
function closeImg() {
  document.querySelector('.img-window').remove();
}


// MENU MOBILNÍ
let menutoggle = document.getElementById('mobile-menu');
let navbarshow = document.querySelector('nav');
let mblmenupzc = document.getElementById('mbl-menu-pzc');
let mbmenutemp = 1;
function actMenu() {
  mbmenutemp == 1 ? (menutoggle.setAttribute("class", "navbar-toggle is-active"), mblmenupzc.style.position = "fixed" ,navbarshow.setAttribute("class", "shownav"), mbmenutemp++ ) : (menutoggle.setAttribute("class", "navbar-toggle"), mblmenupzc.style.position = "absolute" ,navbarshow.setAttribute("class", " ") , mbmenutemp = 1);
};
