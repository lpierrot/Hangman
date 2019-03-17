document.addEventListener("DOMContentLoaded", function(event) {
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    const container = document.querySelector('.images');

    const imagePathBegin = 'images/bcg-';
    const imagePathEnd = '.jpeg';
    let currentImage = 0;
    
    //full = images/bcg-0.jpeg, images/bcg-1.jpeg
    //image

    let imageAlt = 'food';
    let imageEl = document.createElement('img');
    imageEl.setAttribute("src", imagePathBegin + currentImage + imagePathEnd );
    imageEl.setAttribute("alt", imageAlt);
    container.appendChild(imageEl);
    
    const nextSlide = (e) => {
        currentImage += 1;
        if (currentImage>4) {
            currentImage=0;
        }
        imageEl.setAttribute("src" , imagePathBegin + currentImage + imagePathEnd);
    }

    const prevSlide = (e) => {
        currentImage -= 1;
        if (currentImage < 0) {
            currentImage = 4;
        }
        imageEl.setAttribute("src", imagePathBegin + currentImage + imagePathEnd);
    }


    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});

