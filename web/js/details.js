function imgTransform(){
  const mainImg = document.querySelector('.details-img'),
    subImg = document.querySelectorAll('.details-sub-img');

  subImg.forEach((img) =>{
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}

imgTransform();