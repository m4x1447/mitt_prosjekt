let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function toggleGif(gifId) {
  var gif = document.getElementById(gifId);
  if (gif.dataset.isPaused === "true") {
      gif.src = gif.dataset.originalSrc;
      gif.dataset.isPaused = "false";
  } else {
      gif.dataset.originalSrc = gif.src;
      gif.src = "";
      gif.dataset.isPaused = "true";
      setTimeout(() => gif.src = gif.dataset.originalSrc, 0); // Reset the src to the original source to freeze the frame
  }
}

document.getElementById('gif2').addEventListener('click', function() {
  toggleGif('gif2');
});
document.getElementById('gif3').addEventListener('click', function() {
  toggleGif('gif3');
});
