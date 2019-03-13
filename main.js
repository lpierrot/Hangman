document.addEventListener("DOMContentLoaded", function(event) {
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    const container = document.querySelector('.images');

    let imagePath = `images/bcg-0.jpeg`;
    let imageAlt = 'food';
    let imageEl = document.createElement('img');
    imageEl.setAttribute("src", imagePath);
    imageEl.setAttribute("alt", imageAlt);
    container.appendChild(imageEl);
    

    
    
    

    nextBtn.addEventListener('click', NextSlide);
    prevBtn.addEventListener('click', prevSlide);
});

