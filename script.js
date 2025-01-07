// select menu icon and navbar elements for interaction
let menu = document.querySelector("#menu-bars"); // menu icon (the three bars)
let navbar = document.querySelector(".navbar"); // navigation menu

// toggle active states for menu icon and navbar when menu icon is clicked
menu.onclick = () => {
    menu.classList.toggle("fa-times"); // change icon to "X" (close) when clicked
    navbar.classList.toggle("active"); // show or hide the navbar
};

// select theme toggler and its button for changing themes
let themeToggler = document.querySelector(".theme-toggler"); // theme toggler box
let toggleButton = document.querySelector(".toggle-btn"); // toggle button to open/close theme toggler

// toggle the theme state (open/close) when the button is clicked
toggleButton.onclick = () => {
    themeToggler.classList.toggle("active"); // show or hide the theme toggler
};

// change the main theme color when a theme button is clicked
document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color = btn.style.backgroundColor; // get the background color of the clicked button
        document
            .querySelector(":root")
            .style.setProperty("--main-color", color); // set it as the main theme color
    };
});

// remove active states (menu, navbar, theme toggler) when scrolling
window.onscroll = () => {
    menu.classList.remove("fa-times"); // reset the menu icon to default
    navbar.classList.remove("active"); // hide the navbar
    themeToggler.classList.remove("active"); // close the theme toggler
};

// initialize the home slider with Swiper.js
var swiper = new Swiper(".home-slider", {
    effect: "coverflow", // use the coverflow animation effect
    grabCursor: true, // make the cursor look like a hand when hovering
    centeredSlides: true, // make the slides center themselves
    slidesPerView: "auto", // adjust the number of slides based on screen size
    coverflowEffect: {
        // settings for the coverflow effect
        rotate: 0, // no rotation
        stretch: 0, // no stretching
        depth: 100, // distance between slides
        modifier: 2, // intensity of the effect
        slideShadows: true, // enable shadows on the slides
    },
    loop: true, // make the slider loop infinitely
    autoplay: {
        // automatic slide change settings
        delay: 3000, // change slide every 3 seconds
        disableOnInteraction: false, // keep autoplay active even if interacted with
    },
});

// initialize the review slider with Swiper.js
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1, // show one slide at a time by default
    grabCursor: true, // show hand cursor when hovering
    loop: true, // make the slider loop infinitely
    spaceBetween: 10, // small space between slides
    breakpoints: {
        // change number of slides based on screen size
        0: { slidesPerView: 1 }, // 1 slide for very small screens
        700: { slidesPerView: 2 }, // 2 slides for medium screens
        1050: { slidesPerView: 3 }, // 3 slides for larger screens
    },
    autoplay: {
        // automatic slide change settings
        delay: 5000, // change slide every 3 seconds
        disableOnInteraction: false, // keep autoplay active even if interacted with
    },
});

/* this is the snowflake effect code */

const snowflakeContainer = document.createElement("div"); // Create a container for the snowflakes
snowflakeContainer.style.position = "fixed"; // Position it fixed so it doesn't move with the page
snowflakeContainer.style.top = "0"; // Position it at the top
snowflakeContainer.style.left = "0"; // Position it at the left
snowflakeContainer.style.width = "100%"; // Make it take the full width
snowflakeContainer.style.height = "100%"; // Make it take the full height
snowflakeContainer.style.pointerEvents = "none"; // Make it so you can click 'through' it
snowflakeContainer.style.zIndex = "1000"; // Make it appear on top of everything
document.body.appendChild(snowflakeContainer); // Add it to the body

// create 100 snowflakes
const numberOfSnowflakes = 100;
const snowflakes = [];

for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    // randomize the size, starting position, and animation duration
    const size = Math.random() * 4 + 2;
    const startingX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;

    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    snowflake.style.left = startingX + "px";
    snowflake.style.animationDuration = duration + "s";

    snowflakeContainer.appendChild(snowflake);
    snowflakes.push(snowflake);
}

// reset the snowflakes when they go below the window
setInterval(() => {
    snowflakes.forEach((snowflake) => {
        const rect = snowflake.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
            snowflake.style.top = "-10px";
            snowflake.style.left = Math.random() * window.innerWidth + "px";
        }
    });
}, 100);

/* this is method used before in other project it will do the same thing 
const snowflakes = [];

for (let i = 0; i < 100; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  document.body.appendChild(snowflake);

  snowflakes.push({
    element: snowflake,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 2 + 1,
  });
}

function animateSnow() {
  snowflakes.forEach((snowflake) => {
    snowflake.y += snowflake.speed;
    snowflake.element.style.left = snowflake.x + 'px';
    snowflake.element.style.top = snowflake.y + 'px';
    snowflake.element.style.width = snowflake.size + 'px';
    snowflake.element.style.height = snowflake.size + 'px';

    if (snowflake.y > window.innerHeight) {
      snowflake.y = 0;
      snowflake.x = Math.random() * window.innerWidth;
    }
  });
  requestAnimationFrame(animateSnow);
}

animateSnow();
*/
