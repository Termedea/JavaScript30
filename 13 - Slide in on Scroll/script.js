function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    //slide in at halfway through the image
    let slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    console.log(slideInAt);
    //bottom of the image (slide out)
    let imageBottom = sliderImage.offsetTop + sliderImage.height;
    let isHalfShown = slideInAt > sliderImage.offsetTop;
    let isNotScrolledPassed = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPassed) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
