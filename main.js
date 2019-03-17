//Event content loaded. Waiting for content to load before making the querySelctor call
document.addEventListener("DOMContentLoaded", function (event) { 
    //Search for elemensts
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    const container = document.querySelector('.images');
    const footer = document.querySelector('.footer');

    //Object for picture description
    const description = {
        0: "This is my favorite desert",
        1: "Hmmmm Coffee is my best friend",
        2: "And voila that's Cappucino and lemon",
        3: "Fruits, coffee, and break???",
        4: "Now that's a healthy breakfast",
    };

    //String for images path
    const imagePathBegin = 'images/bcg-';
    const imagePathEnd = '.jpeg';
    let currentImage = 0;
    footer.textContent = description[0];
    
    let imageAlt = 'food';
    let imageEl = document.createElement('img');

    //set initial images
    imageEl.setAttribute("src", imagePathBegin + currentImage + imagePathEnd);
    imageEl.setAttribute("alt", imageAlt);
    container.appendChild(imageEl);

    //Function to handle next click
    const nextSlide = (e) => {
        currentImage += 1;
        if (currentImage > 4) {
            currentImage = 0;
        }
        footer.textContent = description[currentImage];
        imageEl.setAttribute("src", imagePathBegin + currentImage + imagePathEnd);
    }

    //Function to handle previous click
    const prevSlide = (e) => {
        currentImage -= 1;
        if (currentImage < 0) {
            currentImage = 4;
        }
        footer.textContent = description[currentImage];
        imageEl.setAttribute("src", imagePathBegin + currentImage + imagePathEnd);
    }


    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});