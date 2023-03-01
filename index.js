
var imgAtual = "img_music/mitski.jpeg" 
var imgAnterior = "img_music/khelani.jpeg"

function trocar() {
    document.getElementById("figura").src = imgAtual
    let aux = imgAtual
    imgAtual = imgAnterior
    imgAnterior = aux
}


function imageGallery() {
    const highlight = document.querySelector(".gallery-hightlight");
    const previews = document.querySelectorAll(".room-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("room-active"));
        highlight.src = bigSrc;
        preview.classList.add("room-active");
      });
    });
}
  
imageGallery();

