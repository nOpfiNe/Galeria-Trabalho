
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

/*seta*/

var img0 = "img_music/mitski.jpeg";
var imgseguinte1 = "img_music/khelani.jpeg";
var imgseguinte2 = "img_music/liniker.jpeg";
var imgseguinte3 = "img_music/lins.jpg";

function trocar(){
    document.getElementById("imagem").src = img0;
    let aux = img0;
    img0 = imgseguinte1;
    imgseguinte1 = imgseguinte2;
    imgseguinte2 = imgseguinte3;
    imgseguinte3 = aux;
}

function passar(){
    document.getElementById("imagem").src = img0;
    let aux = imgseguinte3;
    imgseguinte3 = imgseguinte2;
    imgseguinte2 = imgseguinte1;
    imgseguinte1 = img0;
    img0 = aux;
   
}