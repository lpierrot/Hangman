//Event content loaded. Waiting for content to load before making the querySelctor call
document.addEventListener("DOMContentLoaded", function (event) {
    //Search for elemensts
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    const container = document.querySelector('.images');
    const footer = document.querySelector('.footer');
    const imagePaths = ['images/bcg-0.jpeg', 'images/bcg-1.jpeg', 'images/bcg-2.jpeg', 'images/bcg-3.jpeg', 'images/bcg-4.jpeg']

    //Object for picture description
    const description = {
        0: "This is my favorite desert",
        1: "Hmmmm Coffee is my best friend",
        2: "And voila that's Cappucino and lemon",
        3: "Fruits, coffee, and break!",
        4: "Now that's a healthy breakfast",
    };

    let currentImage = 0;
    footer.textContent = description[0];

    let imageAlt = 'food';
    let imageEl = document.createElement('img');

    //set initial images
    imageEl.setAttribute("src", imagePaths[currentImage]);
    imageEl.setAttribute("alt", imageAlt);
    container.appendChild(imageEl);

    //Function to handle next click
    const nextSlide = (e) => {
        container.animate([{
            opacity: '0.1'
        }, {
            opacity: '1.0'
        }], {
            duration: 1000,
            fill: 'forwards'
        });
        currentImage += 1;
        if (currentImage > 4) {
            currentImage = 0;
        }
        footer.textContent = description[currentImage];
        imageEl.setAttribute("src", imagePaths[currentImage]);
    }

    //Function to handle previous click
    const prevSlide = (e) => {
        container.animate([{
            opacity: '0.1'
        }, {
            opacity: '1.0'
        }], {
            duration: 1000,
            fill: 'forwards'
        });
        currentImage -= 1;
        if (currentImage < 0) {
            currentImage = 4;
        }
        footer.textContent = description[currentImage];
        imageEl.setAttribute("src", imagePaths[currentImage]);
    }


    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});