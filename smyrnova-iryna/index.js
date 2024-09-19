
const soundHandler = () => {
    const icon = document.getElementById("sound");
    if (icon.innerHTML === '<svg class="sound-icon"><use xlink:href="./img/sprite.svg#icon-sound-on"></use></svg>') {
        icon.innerHTML = '<svg class="sound-icon"><use xlink:href="./img/sprite.svg#icon-sound-off"></use></svg>'
    } else {
        icon.innerHTML = '<svg class="sound-icon"><use xlink:href="./img/sprite.svg#icon-sound-on"></use></svg>'
    }
}

const handleNextButtonClick = (id) => {
    const prewPage = document.getElementById(`page${id}`);
    const newPage = document.getElementById(`page${id+1}`);
    prewPage.style = "display: none";
    newPage.style = "display: flex";

}

const slides = [
    {
        hero: "sliderhero1.png",
        caption: "Step-sister"
    },
    {
        hero: "sliderhero2.png",
        caption: "Your Neighbor"
    },
    {
        hero: "sliderhero3.png",
        caption: "Famous Celebrity"
    }
]

const sliderContainer = document.getElementById("slider-container");

for (let item of slides) {
    
    const slide = document.createElement('div');
    slide.className = "swiper-slide";

    const slideContainer = document.createElement('div');
    slideContainer.className = "slide-container";

    const image = document.createElement('img');
    image.src = `./img/${item.hero}`;
    image.alt = `${item.hero}`;
    image.className= 'slide-image';

    const caption = document.createElement('p');
    caption.append(item.caption);
    caption.className= 'slide-caption';

    slideContainer.append(image);
    slideContainer.append(caption);
    slide.append(slideContainer);


    sliderContainer.append(slide)
}


const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });